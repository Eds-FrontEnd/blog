import axios from 'axios';

// Criando a instância do axios com a base URL para a API de posts fictícia
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
