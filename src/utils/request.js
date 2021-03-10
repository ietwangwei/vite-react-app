import axios from 'axios';
import { get, isNaN } from 'lodash';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 10,
  headers: { 'Content-Type': 'application/json' }
});

// TODO: support token
// instance.interceptors.request.use(
//   config => config,
//   error => Promise.reject(error)
// );

instance.interceptors.response.use(
  response => {
    const code = get(response, 'data.code', -1);
    const data = get(response, 'data.data', {});
    const status = parseInt(code, 10);

    if (!isNaN(status) && status === 0) {
      return Promise.resolve(data);
    }

    return Promise.resolve(response);
  },
  error => Promise.reject(error)
);

const request = ({ channel, method = 'GET', ...restArgs }) =>
  instance({
    url: channel,
    method: method.toUpperCase(),
    ...restArgs
  });

export default request;
