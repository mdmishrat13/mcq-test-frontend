import axios from 'axios';

const api = axios.create({
    baseURL: 'https://e-learning-server-git-main-mdmishrat13s-projects.vercel.app/api/v1',
    withCredentials: true  // Replace with your API's base URL
});

export default api;