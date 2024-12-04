import axios from 'axios';

// Cria uma instância do axios com a URL base, utilizando variáveis de ambiente
const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
