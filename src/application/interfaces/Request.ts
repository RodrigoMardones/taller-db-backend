import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ServiceConfig } from '../../typings';

/**
 * Request interface
 */
class Request {
  instance: AxiosInstance;

  constructor({ baseURL = '', headers = {}, timeout = 60000 }: ServiceConfig) {
    this.instance = axios.create({
      baseURL,
      headers,
      timeout,
    });
  }

  get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config);
  }

  post<T = unknown, R = unknown>(
    url: string,
    payload?: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<R>> {
    return this.instance.post<T, AxiosResponse<R>>(url, payload, config);
  }
}

export default Request;
