import axios from 'axios';
import type { AdviceRequest, AdviceResponse } from '../types';

const API_BASE_URL = '/api';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const adviceApi = {
    getAdvice: async (request: AdviceRequest): Promise<AdviceResponse> => {
        try {
            console.log('Fetching advice with payload:', request);
            const response = await client.post<AdviceResponse>('/advice', request);
            return response.data;
        } catch (error: any) {
            console.error('Error fetching medical advice:', error);
            if (error.response?.data) {
                console.error('Server response error:', error.response.data);
            }
            throw new Error('Die Hinweise konnten nicht geladen werden. Bitte versuchen Sie es später erneut.');
        }
    },
};
