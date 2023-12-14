import JsonEditor from "../components/JsonEditor";
import { Button } from "keep-react";
import { useState } from "react";
import { getAnalytics } from "../services/Services";

const Analytics = () => {
  const readOnlyState = false;
  const originalJsonDataTitle = "Original JSON";
  const [originalJsonData, setOriginalJsonData] = useState("");
  const handleOriginalJsonDataOnChange = (json) => {
    setOriginalJsonData(json);
  };
  const [levenshtienDistance, setLevenshtienDistance] = useState(0);
 
  const reconstructedJsonDataTitle = "Reconstructed JSON";
  const [reconstructedJsonData, setReconstructedJsonData] = useState("");
  const handleReconstructedJsonDataOnChange = (json) => {
    setReconstructedJsonData(json);
  };

  const measureOriginalJsonAndReconstructedJson = async (originalJsonData, reconstructedJsonData) => {
   
    const distanceValue = await getAnalytics(originalJsonData, reconstructedJsonData);
    setLevenshtienDistance(distanceValue);
 
  };

  const DistanceCalculateButton = () => {
    return (
      <Button
        size="lg"
        color="success"
        onClick={() => measureOriginalJsonAndReconstructedJson(originalJsonData, reconstructedJsonData)}
      >
        Calculate Distance
      </Button>
    );
  };


  return (
    <div>
     <div className="flex flex-column justify-center">
      <div className="mr-10">
        <JsonEditor
          jsonDataTitle={originalJsonDataTitle}
          jsonData={originalJsonData}
          handleJsonDataOnChange={handleOriginalJsonDataOnChange}
          readOnlyState={readOnlyState}
        />
        <DistanceCalculateButton />
      </div>
      <JsonEditor
        jsonDataTitle={reconstructedJsonDataTitle}
        jsonData={reconstructedJsonData}
        handleJsonDataOnChange={handleReconstructedJsonDataOnChange}
        readOnlyState={readOnlyState}
      />
    </div>
    <h1 className="ml-96 text-5xl"><b>Levensthien Distance = {levenshtienDistance}</b></h1>
    </div>
  )
}

export default Analytics;