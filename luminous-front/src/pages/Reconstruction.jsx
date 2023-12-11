import JsonEditor from "../components/JsonEditor";
import { Button } from "keep-react";
import { useState } from "react";
import { reconstructSoftwareArtifacts } from "../services/Services";
const Reconstruction = () => {
  const prompt = "There are some method's are missing, fill up them and complete the JSON file";
  const readOnlyState = false;
  const incompleteJsonDataTitle = "Incomplete Json Data";
  const [incompleteJsonData, setIncompleteJsonData] = useState("");
  const handleActualJsonDataOnChange = (json) => {
    setIncompleteJsonData(json);
  };

 
  const completeJsonDataTitle = "Complete Json By GPT";
  const [completeJsonData, setCompleteJsonData] = useState("");
  const handleModifiedJsonDataOnChange = (json) => {
    setCompleteJsonData(json);
  };

  const convertIncompleteJsonToCompleteJson = async (incompleteJsonData, prompt) => {
   
    const completeJsonResponse = await reconstructSoftwareArtifacts(incompleteJsonData, prompt);
    const modifiedJson = JSON.stringify(completeJsonResponse.data, null, 2);
    console.log(completeJsonResponse)
    // const modifiedJson = completeJsonResponse.data;
    setCompleteJsonData(modifiedJson)
 
  };

  const ReconstructJsonButton = () => {
    return (
      <Button
        size="lg"
        onClick={() => convertIncompleteJsonToCompleteJson(incompleteJsonData, prompt)}
      >
        Modify JSON
      </Button>
    );
  };


  return (
     <div className="flex flex-column justify-center">
      <div className="mr-10">
        <JsonEditor
          jsonDataTitle={incompleteJsonDataTitle}
          jsonData={incompleteJsonData}
          handleJsonDataOnChange={handleActualJsonDataOnChange}
          readOnlyState={readOnlyState}
        />
        <ReconstructJsonButton />
      </div>
      <JsonEditor
        jsonDataTitle={completeJsonDataTitle}
        jsonData={completeJsonData}
        handleJsonDataOnChange={handleModifiedJsonDataOnChange}
        readOnlyState={readOnlyState}
      />
    </div>
  )
}

export default Reconstruction