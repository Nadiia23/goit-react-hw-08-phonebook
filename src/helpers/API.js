import axios from 'axios';

export const contactsAPI = axios.create({
  baseURL: 'https://636a19e9c07d8f936d930ce7.mockapi.io',
});
