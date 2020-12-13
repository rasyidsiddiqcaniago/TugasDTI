import axios from 'axios';
import { getCookie } from '../utils/cookie';

function getTokenAuth() {
  if (getCookie('token') && getCookie('userData')) {
    console.log('Token ada', JSON.parse(getCookie('token')));
    return JSON.parse(getCookie('token'));
  }
  return '';
}

const createAxiosInterceptor = (url) => {
  const axiosCreate = axios.create({
    baseURL: url,
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'es',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getTokenAuth()}`,
    },
  });
  axiosCreate.interceptors.response.use(
    (response) => {
      console.log('axios nya');
      console.log(response, 'Rasyid');
      return response.data;
    },
    (error) => {
      console.log('tidak dapat data');
      console.log('Errr ', error);
      if (error.response.status === 401) {
        window.location.replace('/');
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

const BaseService = createAxiosInterceptor(process.env.REACT_APP_API);

export default BaseService;
