import axios from 'axios';

export const $api = axios.create({
  baseURL: process.env.REACT_BASE_URL,
});