import axios from 'axios';

export const translateToJson = async (javaCode) =>{
      
  
        try {
          const jsonResponse = await axios.post('http://localhost:3000/translate', { javaCode });
           return jsonResponse;
        } catch (error) {
          console.error('Error converting Java to JSON:', error);
          return {message: "Unable to Compile Java"}
        }
  }