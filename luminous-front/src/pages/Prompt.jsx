import JsonEditor from "../components/JsonEditor";
import { Button } from "keep-react";
import { useState } from "react";
import { designPrompt } from "../services/Services";
import { Label, Radio } from "keep-react";

const Prompt = () => {
  const readOnlyState = false;
  const actualJsonDataTitle = "Actual Json Data";
  const [actualJsonData, setActualJsonData] = useState("");
  const handleActualJsonDataOnChange = (json) => {
    setActualJsonData(json);
  };

  const modifiedJsonDataTitle = "Modified Json Data";
  const [modifiedJsonData, setModifiedJsonData] = useState("");
  const handleModifiedJsonDataOnChange = (json) => {
    setModifiedJsonData(json);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedPercentage, setSelectedOptionPercentage] = useState("");
  const handlePercentageChange = (event) => {
    setSelectedOptionPercentage(event.target.value);
  };

  const convertActualJsonToModifiedJson = async (actualJsonData, selectedOption, selectedPercentage) => {
    const hidingInfo = {
      selectedOption,
      selectedPercentage
    }
    const modifiedJsonResponse = await designPrompt(actualJsonData, hidingInfo);
    const modifiedJson = JSON.stringify(modifiedJsonResponse.data, null, 2);
    console.log(modifiedJsonResponse)
    // const modifiedJson = modifiedJsonResponse.data;
    setModifiedJsonData(modifiedJson)
 
  };

  const ModifyJsonButton = () => {
    return (
      <Button
        size="lg"
        onClick={() => convertActualJsonToModifiedJson(actualJsonData, selectedOption, selectedPercentage)}
      >
        Modify JSON
      </Button>
    );
  };

  const HidingOptions = () => {
    return (
      <fieldset className="flex flex-col gap-3" id="radio">
        <legend className="mb-3">
          <b>Choose options</b>
        </legend>
        <div className="flex flex-row">
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-1"
            name="hiding-info"
            selected={selectedOption}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="hiding-methods"
          />
          <Label htmlFor="country-1">Hiding Methods</Label>
        </div>
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-2"
            name="hiding-info"
            selected={selectedOption}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="hiding-calls"
          />
          <Label htmlFor="country-2">Hiding Calls</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-3"
            name="hiding-info"
            selected={selectedOption}
            onOptionChange={handleOptionChange}
            radioShape="circle"
            value="hiding-relationships"
          />
          <Label htmlFor="country-3">Hiding Relationships</Label>
        </div>
        </div>
      </fieldset>
    );
  };



  const HidingInfoPercentage = () => {
    return (
      <fieldset className="flex flex-col gap-3" id="radio">
        <legend className="mb-3">
          <b>Choose how much info will hide</b>
        </legend>
        <div className="flex flex-row">
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-1"
            name="hiding-info-percentage"
            selected={selectedPercentage}
            onOptionChange={handlePercentageChange}
            radioShape="circle"
            value="one-by-three-remaining"
          />
          <Label htmlFor="country-1">66%</Label>
        </div>
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-2"
            name="hiding-info-percentage"
            selected={selectedPercentage}
            onOptionChange={handlePercentageChange}
            radioShape="circle"
            value="one-by-two-remaining"
          />
          <Label htmlFor="country-2">50%</Label>
        </div>
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-3"
            name="hiding-info-percentage"
            selected={selectedPercentage}
            onOptionChange={handlePercentageChange}
            radioShape="circle"
            value="two-by-five-remaining"
          />
          <Label htmlFor="country-3">60%</Label>
        </div>
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-3"
            name="hiding-info-percentage"
            selected={selectedPercentage}
            onOptionChange={handlePercentageChange}
            radioShape="circle"
            value="two-by-three-remaining"
          />
          <Label htmlFor="country-3">33%</Label>
        </div>
        <div className="flex items-center gap-2 mr-6">
          <Radio
            sizing="lg"
            id="country-3"
            name="hiding-info-percentage"
            selected={selectedPercentage}
            onOptionChange={handlePercentageChange}
            radioShape="circle"
            value="three-by-five-remaining"
          />
          <Label htmlFor="country-3">40%</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio
            sizing="lg"
            id="country-3"
            name="hiding-info-percentage"
            selected={selectedPercentage}
            onOptionChange={handlePercentageChange}
            radioShape="circle"
            value="three-by-four-remaining"
          />
          <Label htmlFor="country-3">25%</Label>
        </div>
        </div>
      </fieldset>
    );
  };

  return (
    <div className="flex flex-column justify-center">
      <div className="mr-10">
        <JsonEditor
          jsonDataTitle={actualJsonDataTitle}
          jsonData={actualJsonData}
          handleJsonDataOnChange={handleActualJsonDataOnChange}
          readOnlyState={readOnlyState}
        />
        <HidingOptions />
        <HidingInfoPercentage/>
        <ModifyJsonButton />
      </div>
      <JsonEditor
        jsonDataTitle={modifiedJsonDataTitle}
        jsonData={modifiedJsonData}
        handleJsonDataOnChange={handleModifiedJsonDataOnChange}
        readOnlyState={readOnlyState}
      />
    </div>
  );
};

export default Prompt;
