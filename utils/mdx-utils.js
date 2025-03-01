import { api } from '../services/api';

// Função para buscar todos os posts
export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts'); // Requisição para buscar todos os posts

        if (data) {
            return data; // Retorna os posts
        }

        return []; // Caso não haja dados, retorna um array vazio
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return []; // Se ocorrer erro, retorna um array vazio
    }
};

// Função para buscar um post específico pelo ID
export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`/posts/${id}`); // Requisição para buscar um post específico pela ID

        return data || {}; // Retorna o post encontrado ou um objeto vazio
    } catch (error) {
        console.error('Erro ao buscar post específico:', error);
        return {}; // Se ocorrer erro, retorna um objeto vazio
    }
};
