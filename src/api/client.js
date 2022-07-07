import axios from 'axios';

import { baseURL } from '../constants';

const client = axios.create({
  baseURL: baseURL,
});

client.interceptors.response.use(
  (response) => response.data,
  (response) => {
    const error = response.response.data || response.response.statusText;
    return Promise.reject(error);
  }
);

export default client;
