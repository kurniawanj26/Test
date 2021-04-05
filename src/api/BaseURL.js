import axios from 'axios';

export default axios.create({
  baseURL: 'https://randomuser.me/api/',
  // baseURL: 'https://yts.mx/api/v2/',
});