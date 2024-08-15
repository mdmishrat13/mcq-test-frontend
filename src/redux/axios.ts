import axios from 'axios';

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_BACKEND}/api/v1`,
    withCredentials: true  // Replace with your API's base URL
});

export default api;