import { useState } from 'react';
import { ConfigProvider, Layout, Button, Alert, Skeleton } from 'antd';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/features/Hero';
import AdviceForm from './components/features/AdviceForm';
import ResultDisplay from './components/features/ResultDisplay';
import type { AdviceRequest, AdviceResponse } from './types';
import { adviceApi } from './api/adviceClient';
import { ArrowLeftOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const { Content } = Layout;

function App() {
  const [advice, setAdvice] = useState<AdviceResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: AdviceRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await adviceApi.getAdvice(data);
      setAdvice(result);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setError(err.message || 'Ein unerwarteter Fehler ist aufgetreten.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setAdvice(null);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0ea5e9',
          borderRadius: 16,
          fontFamily: "'Inter', sans-serif",
          colorBgContainer: '#ffffff',
          colorText: '#0f172a',
          colorTextHeading: '#0f172a',
        },
        components: {
          Button: {
            controlHeight: 54,
            paddingContentHorizontal: 32,
            fontWeight: 700,
          },
          Select: {
            controlHeight: 54,
          }
        }
      }}
    >
      <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
        <Navbar />

        <Content className="container">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ marginTop: '8rem', textAlign: 'center' }}
              >
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                  <Skeleton active avatar paragraph={{ rows: 4 }} round />
                  <div style={{ marginTop: '4rem' }}>
                    <Skeleton active avatar paragraph={{ rows: 3 }} round />
                  </div>
                </div>
              </motion.div>
            ) : !advice ? (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Hero />
                <AdviceForm onSubmit={handleFormSubmit} isLoading={isLoading} />

                {error && (
                  <div style={{ maxWidth: '640px', margin: '3rem auto' }}>
                    <Alert
                      message="Verbindungsfehler"
                      description={error}
                      type="error"
                      showIcon
                      icon={<ExclamationCircleOutlined />}
                      style={{ borderRadius: '24px', padding: '1.5rem', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)' }}
                    />
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button
                  type="text"
                  onClick={handleReset}
                  icon={<ArrowLeftOutlined />}
                  style={{
                    marginBottom: '3rem',
                    paddingLeft: 0,
                    fontWeight: 700,
                    color: '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1rem'
                  }}
                >
                  Neuer Plan
                </Button>

                <ResultDisplay advice={advice} />
              </motion.div>
            )}
          </AnimatePresence>
        </Content>

        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
