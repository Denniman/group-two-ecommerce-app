import axios from "axios";

export const network = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URI}/api/v1/`,
});

export const products = async (payload) => {
    const { data } = await network.post("/customer/get-store", payload);
    return data.payload;
};
