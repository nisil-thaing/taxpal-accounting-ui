import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const isLoginPage = window.location.pathname === '/login';
    if (error.response?.status === 401 && !isLoginPage) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
