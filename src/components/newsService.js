// src/services/newsService.js
import axios from 'axios';

const API_KEY = '200fcbfb8f4c4e3abef7bef718e37081';
const BASE_URL = 'https://newsapi.org/v2';

const getTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    throw error;
  }
};

export { getTopHeadlines };

