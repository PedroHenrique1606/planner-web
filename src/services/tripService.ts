import api from './api';

interface CreateTripData {
    destination: string;
    starts_at: Date;
    ends_at: Date | undefined;
    emails_to_invite: string[];
    owner_name: string;
    owner_email: string;
}

// Função para criar uma nova viagem
export async function createTripService(data: CreateTripData) {
    const response = await api.post('/trips', data);
    return response.data;
}

api.interceptors.request.use(request => {
    console.log('Requisição Enviada:', request);
    return request;
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error('Erro na Requisição:', error.response || error.message);
        return Promise.reject(error);
    }
);
