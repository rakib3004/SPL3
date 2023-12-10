import axios from 'axios';

export const convertJavaCodeToJsonData = async (javaCode) =>{
      
  
        try {
          const jsonResponse = await axios.post('http://localhost:3000/conversion/javaToJson', { javaCode });
           return jsonResponse;
        } catch (error) {
          console.error('Error converting Java to JSON:', error);
          return {message: "Unable to Compile Java"}

        }


  }