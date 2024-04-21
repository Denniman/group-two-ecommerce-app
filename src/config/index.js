import axios from "axios";

// Set config defaults when creating the instance
export const network = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URI}/api/v1/`,
});
