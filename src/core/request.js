import axios from "axios";

export const Request = (token) => {
    return () => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        const instance = axios.create({
            baseURL: "https://umnayavorona.ru:8443/api/v1/",
            timeout: 15000,
            cancelToken: source.token,
        });

        instance.interceptors.request.use(
            async (config) => {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                config.headers.Accept = "application/json";
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        instance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        Object.defineProperty(instance, "cancel", {
            value: source.cancel,
        });

        return instance;
    };
};
