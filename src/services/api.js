// src/services/api.js
import axios from 'axios';

const API_URL = 'https://6738a9b34eb22e24fca89864.mockapi.io/api/habilidades';

export const getHabilidades = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createHabilidade = async (habilidade) => {
  const response = await axios.post(API_URL, habilidade);
  return response.data;
};

export const updateHabilidade = async (id, habilidade) => {
  const response = await axios.put(`${API_URL}/${id}`, habilidade);
  return response.data;
};

export const deleteHabilidade = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
