import React from 'react';
import { Layout, Space, Typography } from 'antd';
import { MedicineBoxFilled } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const Navbar: React.FC = () => {
    return (
        <Header className="glass-nav" style={{
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            height: '80px'
        }}>
            <div className="container" style={{ padding: 0, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <Space size="middle">
                    <div style={{ background: 'var(--medical-blue-gradient)', padding: '10px', borderRadius: '14px', display: 'flex', boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)' }}>
                        <MedicineBoxFilled style={{ fontSize: '22px', color: '#fff' }} />
                    </div>
                    <Title level={4} style={{ margin: 0, fontWeight: 900, color: '#0f172a', letterSpacing: '-0.04em' }}>
                        Medical Visit Companion
                    </Title>
                </Space>
            </div>
        </Header>
    );
};

export default Navbar;
