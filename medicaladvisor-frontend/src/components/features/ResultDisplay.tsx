import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import {
    CheckCircleFilled,
    InfoCircleOutlined,
    CalendarOutlined,
    MedicineBoxOutlined,
    FileSearchOutlined
} from '@ant-design/icons';
import type { AdviceResponse } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;

interface ResultDisplayProps {
    advice: AdviceResponse;
}

const TypingText: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 25);
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, delay]);

    return <Text style={{ fontWeight: 500, color: 'inherit' }}>{displayedText}</Text>;
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ advice }) => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemAnim: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', damping: 20 }
        }
    };

    const AdviceSection = ({
        title,
        items,
        icon,
        step,
        gradient,
        baseDelay = 0
    }: {
        title: string,
        items: string[],
        icon: React.ReactNode,
        step: string,
        gradient: string,
        baseDelay: number
    }) => (
        <motion.div variants={itemAnim} className="gradient-card" style={{ background: gradient }}>
            <div className="card-header-row" style={{ marginBottom: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                    <Title level={5} style={{ margin: 0, opacity: 0.8, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                        Phase {step}
                    </Title>
                    <Title level={3} style={{ margin: 0, fontWeight: 800 }}>{title}</Title>
                </div>
                <div className="icon-box-modern">
                    {icon}
                </div>
            </div>

            <div className="modern-checklist" style={{ flex: 1 }}>
                {items.map((point, index) => (
                    <motion.div
                        key={index}
                        className="modern-list-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: baseDelay + (index * 0.8) }}
                    >
                        <CheckCircleFilled style={{ color: 'white', fontSize: '16px', opacity: 0.9, marginTop: '3px' }} />
                        <TypingText text={point} delay={(baseDelay + index * 1.5) * 1000} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    return (
        <motion.div variants={container} initial="hidden" animate="show" style={{ paddingBottom: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        display: 'inline-block',
                        padding: '4px 16px',
                        background: 'rgba(14, 165, 233, 0.1)',
                        borderRadius: '100px',
                        fontSize: '11px',
                        fontWeight: 800,
                        color: '#0ea5e9',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem'
                    }}
                >
                    ANALYSE ABGESCHLOSSEN
                </motion.div>
                <Title level={1} className="main-title">Ihre Strategie</Title>
                <Paragraph style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                    Wir haben die KI-Hinweise in drei Phasen unterteilt, um Ihnen die bestmögliche Orientierung zu bieten.
                </Paragraph>
            </div>

            <div className="results-grid">
                <AdviceSection
                    step="01"
                    title="Vorbereitung"
                    items={advice.beforeVisit}
                    icon={<CalendarOutlined style={{ fontSize: '24px' }} />}
                    gradient="var(--medical-blue-gradient)"
                    baseDelay={0.5}
                />

                <AdviceSection
                    step="02"
                    title="Gespräch"
                    items={advice.duringVisit}
                    icon={<MedicineBoxOutlined style={{ fontSize: '24px' }} />}
                    gradient="var(--medical-green-gradient)"
                    baseDelay={1.5}
                />

                <AdviceSection
                    step="03"
                    title="Nachsorge"
                    items={advice.afterVisit}
                    icon={<FileSearchOutlined style={{ fontSize: '24px' }} />}
                    gradient="var(--medical-purple-gradient)"
                    baseDelay={2.5}
                />
            </div>

            <AnimatePresence>
                {advice.disclaimer && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 5 }}
                        className="disclaimer-glass"
                        style={{
                            display: 'flex',
                            gap: '1.25rem',
                            alignItems: 'center',
                            padding: '1.5rem 2rem',
                            borderRadius: '24px',
                            marginTop: '4rem'
                        }}
                    >
                        <InfoCircleOutlined style={{ color: '#0ea5e9', fontSize: '24px' }} />
                        <div style={{ flex: 1 }}>
                            <Text strong style={{ display: 'block', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Haftungsausschluss
                            </Text>
                            <Paragraph style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: 1.5 }}>
                                {advice.disclaimer}
                            </Paragraph>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ResultDisplay;
