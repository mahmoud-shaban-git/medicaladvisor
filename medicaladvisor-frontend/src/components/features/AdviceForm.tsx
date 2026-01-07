import React from 'react';
import { Select, Button, Form, Typography } from 'antd';
import {
    SearchOutlined,
    CompassOutlined,
    AuditOutlined,
    UserOutlined,
    FlagOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
import type { AdviceRequest } from '../../types';
import {
    SPECIALTY_OPTIONS,
    VISIT_GOAL_OPTIONS,
    AGE_GROUP_OPTIONS,
    VISIT_TYPE_OPTIONS
} from '../../constants/mappings';

const { Title, Paragraph } = Typography;

interface AdviceFormProps {
    onSubmit: (data: AdviceRequest) => void;
    isLoading: boolean;
}

const AdviceForm: React.FC<AdviceFormProps> = ({ onSubmit, isLoading }) => {
    const [form] = Form.useForm();

    const handleFinish = (values: any) => {
        onSubmit(values as AdviceRequest);
    };

    return (
        <div className="modern-form-container">
            <div className="glass-card">
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        padding: '12px',
                        background: 'var(--medical-blue-gradient)',
                        borderRadius: '20px',
                        color: 'white',
                        boxShadow: '0 8px 16px rgba(14, 165, 233, 0.3)',
                        marginBottom: '1.5rem'
                    }}>
                        <CompassOutlined style={{ fontSize: '24px' }} />
                    </div>
                    <Title level={2} style={{ margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
                        Konfiguration starten
                    </Title>
                    <Paragraph style={{ color: '#64748b', fontSize: '1.05rem', marginTop: '0.75rem' }}>
                        Personalisieren Sie Ihre Begleitung für den anstehenden Termin.
                    </Paragraph>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    requiredMark={false}
                    initialValues={{
                        specialty: 'GENERAL_MEDICINE',
                        visitGoal: 'PREVENTION',
                        ageGroup: '30-50',
                        visitType: 'CHECKUP',
                    }}
                >
                    <Form.Item
                        label={<span><AuditOutlined /> Fachrichtung</span>}
                        name="specialty"
                        rules={[{ required: true }]}
                    >
                        <Select size="large" options={SPECIALTY_OPTIONS} />
                    </Form.Item>

                    <Form.Item
                        label={<span><FlagOutlined /> Besuchsziel</span>}
                        name="visitGoal"
                        rules={[{ required: true }]}
                    >
                        <Select size="large" options={VISIT_GOAL_OPTIONS} />
                    </Form.Item>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                        <Form.Item
                            label={<span><UserOutlined /> Altersgruppe</span>}
                            name="ageGroup"
                            rules={[{ required: true }]}
                        >
                            <Select size="large" options={AGE_GROUP_OPTIONS} />
                        </Form.Item>

                        <Form.Item
                            label={<span><AppstoreOutlined /> Besuchsart</span>}
                            name="visitType"
                            rules={[{ required: true }]}
                        >
                            <Select size="large" options={VISIT_TYPE_OPTIONS} />
                        </Form.Item>
                    </div>

                    <Form.Item style={{ marginBottom: 0, marginTop: '2rem' }}>
                        <Button
                            className="btn-gradient"
                            type="primary"
                            htmlType="submit"
                            block
                            icon={<SearchOutlined style={{ fontSize: '1.2rem' }} />}
                            loading={isLoading}
                        >
                            Vorbereitung generieren
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AdviceForm;
