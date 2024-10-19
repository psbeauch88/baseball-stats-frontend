import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getPlayers = () => {
  return axios.get(`${API_URL}/players`);
};
