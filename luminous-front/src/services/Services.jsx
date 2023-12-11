import axios from 'axios';

const server_url = 'http://localhost:3000';

export const translateToJson = async (javaCode) =>{
        try {
          const jsonResponse = await axios.post(`${server_url}/translate`, { javaCode });
           return jsonResponse;
        } catch (error) {
          console.error('Error details:', error);
          return {message: "Unable to Compile Java"}
        }
  }

  export const translateRepositoryToJSON = async (repositoryUrl) =>{
    try {
      const jsonResponse = await axios.post(`${server_url}/repo-translate`, { repositoryUrl });
       return jsonResponse;
    } catch (error) {
      console.error('Error details:', error);
      return {message: "Unable to Compile Java Repository"}
    }
}

export const getDatasets = async () =>{
  try {
    const jsonResponse = await axios.get(`${server_url}/datasets`);
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}

export const getPrompt = async (jsonData, configurationData) =>{
  try {
    const jsonResponse = await axios.post(`${server_url}/prompt`, { jsonData, configurationData});
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to get Prompt"}
  }
}

export const reconstructSoftwareArtifacts = async (jsonData) =>{
  try {
    const jsonResponse = await axios.post(`${server_url}/reconstruct`, { jsonData });
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}

export const getInfo = async (jsonData) =>{
  try {
    const jsonResponse = await axios.get(`${server_url}/info`, { jsonData });
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}
export const getAnalytics = async (actualJson, reconstructedJson) =>{
  try {
    const jsonResponse = await axios.get(`${server_url}/analytics`, {actualJson, reconstructedJson});
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}
export const getAbout = async () =>{
  try {
    const jsonResponse = await axios.get(`${server_url}/about`);
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to Compile Java Repository"}
  }
}