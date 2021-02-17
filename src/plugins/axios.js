import axios from 'axios';
import TokenService from '../helpers/token';

const baseUrl = process.env.VUE_APP_API_URL;
const options = {
    baseURL: baseUrl,
    headers: {},
};

if (TokenService.getToken() !== null) {
    options.headers = TokenService.getHeader();
}

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use(async (request) => request);

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
