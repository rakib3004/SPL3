import axios from 'axios';

export const translateToJson = async (javaCode) =>{
        try {
          const jsonResponse = await axios.post('http://localhost:3000/translate', { javaCode });
           return jsonResponse;
        } catch (error) {
          console.error('Error details:', error);
          return {message: "Unable to Compile Java"}
        }
  }

  export const translateRepositoryToJSON = async (repositoryUrl) =>{
    try {
      const jsonResponse = await axios.post('http://localhost:3000/repo-translate', { repositoryUrl });
       return jsonResponse;
    } catch (error) {
      console.error('Error details:', error);
      return {message: "Unable to Compile Java Repository"}
    }
}

export const getDatasets = async () =>{
  try {
    const jsonResponse = await axios.get('http://localhost:3000/datasets');
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}

export const getPrompt = async (jsonData, configurationData) =>{
  try {
    const jsonResponse = await axios.post('http://localhost:3000/prompt', { jsonData, configurationData});
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to get Prompt"}
  }
}

export const reconstructSoftwareArtifacts = async (jsonData) =>{
  try {
    const jsonResponse = await axios.post('http://localhost:3000/reconstruct', { jsonData });
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}

export const getInfo = async (jsonData) =>{
  try {
    const jsonResponse = await axios.get('http://localhost:3000/info', { jsonData });
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}
export const getAnalytics = async (actualJson, reconstructedJson) =>{
  try {
    const jsonResponse = await axios.get('http://localhost:3000/analytics', {actualJson, reconstructedJson});
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}
export const getAbout = async () =>{
  try {
    const jsonResponse = await axios.get('http://localhost:3000/about');
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}