import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-ianpucca.herokuapp.com',
});

export default api;