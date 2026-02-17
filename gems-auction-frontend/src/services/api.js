import axios from "axios";
import { useAuthStore } from "../store/authStore";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";

// axios instance
const api = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 15000,
});

// request interceptor: attach token
api.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// response interceptor: basic error normalization
api.interceptors.response.use(
    (res) => res,
    (error) => {
        const message =
            error?.response?.data?.error ||
            error?.response?.data?.message ||
            error?.message ||
            "Request failed";
        return Promise.reject(new Error(message));
    }
);

export default api;
export { API_BASE_URL };
