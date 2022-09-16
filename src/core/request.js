import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Request = (() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const instance = axios.create({
        baseURL: "https://umnayavorona.ru:8443/api/v1/",
        timeout: 15000,
        cancelToken: source.token,
    });

    instance.interceptors.request.use(
        async (config) => {
            let token = await AsyncStorage.getItem("token");
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
})();
