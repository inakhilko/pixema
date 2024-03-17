import axios from 'axios';

export const APP_STORAGE_KEYS = {
  USER: 'pixemaUser',
  TOKENS: 'pixemaTokens',
};

const api = axios.create({
  baseURL: '/',
});

api.interceptors.request.use(
  async (config) => {
    const tokens = localStorage.getItem(APP_STORAGE_KEYS.TOKENS);
    if (tokens) {
      const { access } = JSON.parse(tokens);
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => new Promise((resolve) => {
    const originalRequest = error.config;
    const tokens = localStorage.getItem(APP_STORAGE_KEYS.TOKENS);
    if (tokens) {
      const { refresh } = JSON.parse(tokens);
      if (error.response && error.response.status === 401) {
        originalRequest._retry = true;
        const response = axios.post('https://studapi.teachmeskills.by/auth/jwt/refresh/', { refresh }).then((res) => {
          localStorage.setItem(APP_STORAGE_KEYS.TOKENS, JSON.stringify({ refresh, access: res.data.access }));
          return res.data.access;
        }).then((access) => axios({ ...originalRequest, headers: { ...originalRequest.headers, Authorization: `Bearer ${access}` } }));
        resolve(response);
      }
    }
  }),
);
export default api;
