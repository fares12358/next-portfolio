import axios from 'axios';

const API = 'https://node-portfolio-back-end-eight.vercel.app';
// const API = "http://localhost:5000"
const token = "f9b8c1d45e3a4f6789b12c34d5e67f890a1b23c45d6e78f90b12c34d5e67f890";


export const adminLogin = async (password) => {
    try {
        const response = await axios.post(`${API}/adminLogin`, { password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getVisitorCount = async () => {
    const response = await axios.get(`${API}/visitor-count`);
    return response.data.total;
};

export const trackVisitorAPI = async ( url, role, heardFrom, counter) => {
    await axios.post(`${API}/track-visitor`, { url, role, heardFrom, counter});
};

export const getVisitors = async () => {
    const response = await axios.get(`${API}/get_visitors`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data; // return the array directly
};


