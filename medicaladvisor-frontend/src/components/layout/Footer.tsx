import React from 'react';
import { Layout, Typography, Space } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer: React.FC = () => {
    return (
        <AntFooter style={{ background: '#fcfcfd', padding: '100px 24px 60px', borderTop: '1px solid #f1f5f9' }}>
            <div className="container" style={{ padding: 0, textAlign: 'center' }}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                    <Text style={{ fontSize: '13px', color: '#94a3b8', maxWidth: '600px', display: 'block', margin: '0 auto', lineHeight: '1.8' }}>
                        <Text strong style={{ color: '#64748b' }}>Wichtiger Hinweis:</Text>
                        Diese Anwendung dient ausschließlich der allgemeinen Orientierung für Arztbesuche.
                        Sie ersetzt keine professionelle medizinische Beratung, Diagnose oder Behandlung.
                    </Text>
                    <div style={{ marginTop: '20px' }}>
                        <Text style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 500, letterSpacing: '0.05em' }}>
                            © {new Date().getFullYear()} MEDICAL VISIT COMPANION
                        </Text>
                    </div>
                </Space>
            </div>
        </AntFooter>
    );
};

export default Footer;
