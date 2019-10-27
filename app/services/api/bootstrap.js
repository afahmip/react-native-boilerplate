import axios from 'axios';

let baseURL = process.env.BASE_URL || 'https://reqres.in/api';

export const APIClient = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
