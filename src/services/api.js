import axios from 'axios';

// django API base URL
const API_URL = 'http://127.0.0.1:8000/api/'; 


// fetch all portfolio values for a specific model
export const getPortfolios = async (modelType) => {
    const response = await axios.get(`${API_URL}portfolios/?model_type=${modelType}`);
    return response.data;
};

export const getTrades = async (modelType) => {
    const reponse = await axios.get(`${API_URL}trades/?model_type=${modelType}`);
    return reponse.data;
};
