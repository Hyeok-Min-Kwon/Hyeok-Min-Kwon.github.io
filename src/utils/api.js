import axios from 'axios';

export const askQuestion = async (question) => {
  try {
    const response = await axios.post('https://4.217.250.63:443/api/ask', { question });
    return response.data.answer;
  } catch (error) {
    throw new Error('Error fetching answer');
  }
};
