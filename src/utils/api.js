import axios from 'axios';

export const askQuestion = async (question) => {
  try {
    const response = await axios.post("https://4.217.250.63/api/ask", { question },{
      headers: {
        "Content-Type" : "application/json"
      },
      withCredentials : true
    }
  );
    return response.data.answer;
  } catch (error) {
    console.error("Axios Error", error);
    throw new Error('Error fetching answer');
  }
};
