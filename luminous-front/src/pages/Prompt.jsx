import JsonEditor from "../components/JsonEditor";
import { Button } from "keep-react";
import { useState } from "react";
import { getPrompt } from "../services/Services";
import { Label, Radio } from "keep-react";

const Prompt = () => {
  const actualJsonDataTitle = "Actual Json Data";
  const [actualJsonData, setActualJsonData] = useState("");
  const handleActualJsonDataOnChange = (json) => {
    setActualJsonData(json);
  };
  const readOnlyState = false;

  const modifiedJsonDataTitle = "Modified Json Data";
  const [modifiedJsonData, setModifiedJsonData] = useState("");
  const handleModifiedJsonDataOnChange = (json) => {
    setModifiedJsonData(json);
  };

  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };

  const convertActualJsonToModifiedJson = async (actualJsonData) => {
    const modifiedJsonResponse = await getPrompt(actualJsonData);
    console.log(modifiedJsonResponse);
  };

  const ConvertButton = () => {
    return (
      <Button
        size="lg"
        onClick={() => convertActualJsonToModifiedJson(actualJsonData)}
      >
        Convert
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
            name="favorite-country"
            selected={selected}
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
            name="favorite-country"
            selected={selected}
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
            name="favorite-country"
            selected={selected}
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
        <ConvertButton />
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
