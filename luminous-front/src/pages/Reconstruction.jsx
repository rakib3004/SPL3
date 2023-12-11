import JsonEditor from "../components/JsonEditor";
import { Button } from "keep-react";
import { useState } from "react";
import { reconstructSoftwareArtifact } from "../services/Services";
const Reconstruction = () => {
  const promptMessage = "There are some method's calls are missing, fill up them and complete the JSON file";
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

  const convertIncompleteJsonToCompleteJson = async (incompleteJsonData, promptMessage) => {
   
    const completeJsonResponse = await reconstructSoftwareArtifact(incompleteJsonData, promptMessage);
    const modifiedJson = JSON.stringify(completeJsonResponse.data, null, 2);
    setCompleteJsonData(modifiedJson)
 
  };

  const ReconstructJsonButton = () => {
    return (
      <Button
        size="lg"
        onClick={() => convertIncompleteJsonToCompleteJson(incompleteJsonData, promptMessage)}
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

export default Reconstruction;