import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { BASE_URL, REQUEST_TIMEOUT } from "./api.constants";

import { HttpMethodEnum } from "./api.enums";
import { useGlobalStore } from "store/global.store";
const axiosInstance = axios.create({});

export default axiosInstance;

export const sendAxiosRequest = async <T, D, M, S>({
  method,
  url,
  payload,
  params,
  isAuthRequired = true,
  headers,
  decoder,
  encoder,
  isFormData,
}: AxiosRequestParams<T, D, M, S>): Promise<D> => {
  let updatedHeader = {
    ...headers,
    Accept: "application/json",
  } as AxiosRequestHeaders;

  if (isAuthRequired) {
    const { accessToken } = useGlobalStore.getState();
    if (accessToken) {
      updatedHeader = {
        ...updatedHeader,
        Authorization: `Bearer ${accessToken}`,
      } as AxiosRequestHeaders;
    }
  }

  if (isFormData) {
    updatedHeader = {
      ...updatedHeader,
      "Content-Type": "multipart/form-data",
    } as AxiosRequestHeaders;
  }

  const config: AxiosRequestConfig = {
    method: method as unknown as string,
    url: url,
    params: params ?? undefined,
    data: encoder ? encoder(payload) : payload,
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: updatedHeader,
  };
  const response = await axiosInstance(config);
  if (decoder) {
    return decoder(response.data);
  }
  return response.data;
};

interface AxiosRequestParams<
  T = unknown,
  D = unknown,
  M = unknown,
  S = unknown
> {
  method: HttpMethodEnum;
  url: string;
  payload: M;
  params?: unknown;
  isAuthRequired?: boolean;
  headers?: AxiosRequestHeaders;
  decoder?: (data: T) => D;
  encoder?: (data: M) => S;
  isFormData?: boolean;
}
