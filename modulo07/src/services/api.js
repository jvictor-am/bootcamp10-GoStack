import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3334',
});

export default api;

// json-server server.json -p 3334
