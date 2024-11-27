import axios from 'axios';

const baseURL = 'http://localhost:8003/api/auth/';

const API = axios.create({
    baseURL,
    withCredentials: true,
});

API.interceptors.request.use(
    function (req) {
        const token = localStorage.getItem('token');
        if (token) {
            req.headers['auth-token'] = JSON.parse(token);
        }
        return req;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export const login = async ({ loginData }) => {
    try {
        const response = await API.post('login', loginData);
        const { data } = response;
        // Store the token in localStorage
        localStorage.setItem('token', JSON.stringify(data.token));
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        return error;
    }
};
