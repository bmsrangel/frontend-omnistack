import axios from 'axios';

const api = axios.create({
	baseURL: 'https://backend-omnistack-bmsrangel.herokuapp.com'
});

export default api;
