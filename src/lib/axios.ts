import Axios from "axios";
import { useNotificationStore } from "src/stores/notifacations";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const axios = Axios.create({
    baseURL: baseUrl,
});

axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;
        const status = error?.response?.status;
        useNotificationStore.getState().addNotifaction({
            type: "error",
            title: "Error",
            message,
        });

        return Promise.reject({ message, status });
    }
);
