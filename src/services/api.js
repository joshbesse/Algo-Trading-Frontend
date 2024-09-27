import axios from 'axios';

// django API base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://algo-trading-backend-f273d82bdf99.herokuapp.com/api/';

// fetch all portfolio values for a specific model
export const getPortfolios = async (modelType) => {
    const response = await axios.get(`${API_BASE_URL}portfolios/?model_type=${modelType}`);
    return response.data;
};

export const getTrades = async (modelType) => {
    const reponse = await axios.get(`${API_BASE_URL}trades/?model_type=${modelType}`);
    return reponse.data;
};
