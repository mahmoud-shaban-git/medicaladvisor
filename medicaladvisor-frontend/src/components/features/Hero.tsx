import React from 'react';
import { Typography, Row, Col } from 'antd';
import {
    SafetyCertificateOutlined,
    CalendarOutlined,
    HeartOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;

const Hero: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '1rem 0 6rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hero-badge"
            >
                ✨ IHR DIGITALER MEDICAL COMPANION
            </motion.div>

            <Title level={1} className="main-title">
                Sicher und vorbereitet zum Arzt
            </Title>
            <Paragraph style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '650px', margin: '0.5rem auto 4.5rem', lineHeight: '1.7' }}>
                Erhalten Sie strukturierte, leicht verständliche Hinweise für Ihren nächsten Termin.
                Behalten Sie den Überblick und fühlen Sie sich bestmöglich begleitet.
            </Paragraph>

            <Row gutter={[48, 48]} justify="center">
                <Col xs={24} sm={8}>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="feature-tag"
                    >
                        <div className="feature-icon-wrapper" style={{ color: '#0ea5e9' }}>
                            <CalendarOutlined />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Text strong style={{ fontSize: '1rem', color: '#1e293b', display: 'block' }}>Strukturierte Planung</Text>
                            <Text style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Optimal vorbereitet.</Text>
                        </div>
                    </motion.div>
                </Col>
                <Col xs={24} sm={8}>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="feature-tag"
                    >
                        <div className="feature-icon-wrapper" style={{ color: '#10b981' }}>
                            <HeartOutlined />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Text strong style={{ fontSize: '1rem', color: '#1e293b', display: 'block' }}>Mehr Gelassenheit</Text>
                            <Text style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Sicher & gut begleitet.</Text>
                        </div>
                    </motion.div>
                </Col>
                <Col xs={24} sm={8}>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="feature-tag"
                    >
                        <div className="feature-icon-wrapper" style={{ color: '#8b5cf6' }}>
                            <SafetyCertificateOutlined />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Text strong style={{ fontSize: '1rem', color: '#1e293b', display: 'block' }}>Verlässliche Hilfe</Text>
                            <Text style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Präzise KI-Hinweise.</Text>
                        </div>
                    </motion.div>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;
