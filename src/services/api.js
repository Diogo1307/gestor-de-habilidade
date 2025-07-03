import axios from 'axios';

const API_URL = 'https://6738a9b34eb22e24fca89864.mockapi.io/api';

export const getHabilidades = async () => {
  try {
    const response = await axios.get(`${API_URL}/habilidades`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar habilidades:', error);
    throw error;
  }
};

export const createHabilidade = async (habilidade) => {
  try {
    const response = await axios.post(`${API_URL}/habilidades`, habilidade);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar habilidade:', error);
    throw error;
  }
};

export const updateHabilidade = async (id, habilidade) => {
  try {
    const response = await axios.put(`${API_URL}/habilidades/${id}`, habilidade);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar habilidade ${id}:`, error);
    throw error;
  }
};

export const deleteHabilidade = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/habilidades/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao deletar habilidade ${id}:`, error);
    throw error;
  }
};
