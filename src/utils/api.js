import axios from 'axios';

export const askQuestion = async (question) => {
  try {
    const response = await axios.post(
      "http://4.217.250.8080/api/ask", 
      { question },
    
  );
    return response.data.answer;
  } catch (error) {
    console.error("Axios Error", error);
    throw new Error('Error fetching answer');
  }
};
