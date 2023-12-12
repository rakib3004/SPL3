import JsonEditor from "../components/JsonEditor";
import { Button, Textarea } from "keep-react";
import { useState } from "react";
import { reconstructSoftwareArtifact } from "../services/Services";
import TextEditor from "../components/TextEditor";
const Reconstruction = () => {
  const [promptMessage, setPromptMessage] = useState("There are some method's calls are missing, fill up them and complete the JSON file");
  const readOnlyState = false;
  const incompleteJsonDataTitle = "Incomplete Json Data";
  const [incompleteJsonData, setIncompleteJsonData] = useState("");
  const handleActualJsonDataOnChange = (json) => {
    setIncompleteJsonData(json);
  };

  const handlePromptMessageOnChange = (message) => {
    setPromptMessage(message);
  };
 
  const completeJsonDataTitle = "Complete Json By Large Language Model";
  const [completeJsonData, setCompleteJsonData] = useState("");
  const handleModifiedJsonDataOnChange = (json) => {
    setCompleteJsonData(json);
  };


  const convertIncompleteJsonToCompleteJson = async (incompleteJsonData, promptMessage) => {
    console.log(promptMessage);
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
        Complete JSON
      </Button>
    );
  };

  const PromptMessageField = () =>{
    return (
   
    <TextEditor
    jsonData={promptMessage}
    handleJsonDataOnChange={handlePromptMessageOnChange}
  />

    );
  }


  return (
     <div className="flex flex-column justify-center">
      <div className="mr-10">
        <JsonEditor
          jsonDataTitle={incompleteJsonDataTitle}
          jsonData={incompleteJsonData}
          handleJsonDataOnChange={handleActualJsonDataOnChange}
          readOnlyState={readOnlyState}
        />
        <div className="my-6">
        <PromptMessageField/>
        </div>
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