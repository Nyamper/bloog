import axios from 'axios';

import { baseURL } from '../constants';

export const client = axios.create({
  baseURL: baseURL,
});

export default client;
