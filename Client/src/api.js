import axios from 'axios';

// Point this instance to your live running backend server
const API = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Automatically inject your JWT storage token into request headers if a user is logged in
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;