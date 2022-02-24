import axios from 'axios';

const baseURL = 'https://front-test.beta.aviasales.ru';
const instance = axios.create({ baseURL });

export const API = {
  async getSearchIDfromAPI() {
    try {
      const data = await instance.get('/search');
      return data;
    } catch (error) {
      return error.response;
    }
  },
  async getTicketsFromApi(searchId) {
    try {
      const response = await instance.get(`/tickets?searchId=${searchId}`);
      return response;
    } catch (error) {
      return {
        data: {
          tickets: [],
          stop: false,
        },
      };
    }
  },
};
