import axios from 'axios';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export const api = axios.create({
  baseURL: 'https://pro-api.coinmarketcap.com/v1',
  // baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
})


