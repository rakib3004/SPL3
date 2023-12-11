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

export const designPrompt = async (actualJsonData, hidingInfo) =>{
  try {
    const jsonResponse = await axios.post(`${server_url}/prompt`, { actualJsonData, hidingInfo});
     return jsonResponse;
  } catch (error) {
    console.error('Error details:', error);
    return {message: "Unable to get Prompt"}
  }
}

export const reconstructSoftwareArtifact = async (incompleteJsonData, promptMessage) =>{
  try {
    const jsonResponse = await axios.post(`${server_url}/reconstruct`, { incompleteJsonData, promptMessage });
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
export const getAnalytics = (originalJsonData, reconstructedJsonData) =>{
  const m = originalJsonData.length;
  const n = reconstructedJsonData.length;

  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j; 
      } else if (j === 0) {
        dp[i][j] = i; 
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, 
          dp[i][j - 1] + 1, 
          dp[i - 1][j - 1] +
            (originalJsonData.charAt(i - 1) ===
            reconstructedJsonData.charAt(j - 1)
              ? 0
              : 1),
        );
      }
    }
  }

  return dp[m][n];
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