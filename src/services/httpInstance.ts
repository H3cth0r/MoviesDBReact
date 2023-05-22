import axios from "axios";
import Config from "config";

const httpInstance = axios.create({
    baseURL: Config.API_URL,
});

// Add a request interceptor
httpInstance.interceptors.request.use(
    async (config) => {
        const newConfig = {...config};
        // newConfig.headers.Authorization = ``
        return newConfig;
    },
    (error) => {

    }
);

httpInstance.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpInstance;