import axios from 'axios';
import config from '@/config.json';

const axiosHttp = axios.create(config.http);

export const cancelToken = axios.CancelToken;

export default axiosHttp;
