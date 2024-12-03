import axios from 'axios';

// Cria uma instância do axios com a URL base, utilizando variáveis de ambiente
const api = axios.create({
    baseURL: "https://plannernodeapi.onrender.com",
});

export default api;
