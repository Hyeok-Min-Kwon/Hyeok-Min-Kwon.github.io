import axios from 'axios';

export const askQuestion = async (question) => {
  try {
    const response = await axios.post(
      "https://4.217.250:8080/api/ask", 
      { question },
      {
        headers: {
          "Content-Type" : "application/json"
        },
        withCredentials : true
    },
    {timeout : 50000}
  );
    return response.data.answer;
  } catch (error) {
    console.error("Axios Error", error);
    throw new Error('Error fetching answer');
  }
};
