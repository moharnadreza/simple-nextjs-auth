import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      // Add timestamp for cache busting if needed
      if (config.method === "get") {
        config.params = {
          ...config.params,
          _t: Date.now(),
        };
      }

      console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    (error: AxiosError) => {
      console.error("Request Error:", error);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(`✅ ${response.status} ${response.config.url}`);
      return response;
    },
    (error: AxiosError) => {
      console.error(`❌ ${error.response?.status} ${error.config?.url}`);
      return Promise.reject(error);
    }
  );

  return client;
};

const apiClient = createApiClient();

const api = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T> =>
    apiClient.get(url, config).then((response) => response.data),
};

export { api };
