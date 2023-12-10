
import JavaEditor from '../components/JavaEditor';
import JsonEditor from '../components/JsonEditor';
import { Button } from "keep-react";
import { useState } from "react";
import {translateToJson} from '../services/Services'

const Translation = () => {
  const javaEditorTitle = "Java Code"
  const [javaCode, setJavaCode] = useState("");
  const handleJavaCodeOnChange = (java) => {
    setJavaCode(java);
  };

  // const javaEditorProps = {
  //   javaEditorTitle: javaEditorTitle,
  //   javaCode: javaCode,
  //   handleJavaCodeOnChange: handleJavaCodeOnChange,
  // };
  
  
  const jsonDataTitle = "Json Data"
  const [jsonData, setJsonData] = useState('');
  const handleJsonDataOnChange = (json) => {
    setJsonData(json);
  };
  const readOnlyState = true;

  // const jsonEditorProps = {
  //   jsonDataTitle: jsonDataTitle,
  //   jsonData: jsonData,
  //   handleJsonDataOnChange: handleJsonDataOnChange,
  //   readOnlyState: readOnlyState,
  // };
  
    const convertJavaCodeToJsonData = async (javaCode) =>{
      const jsonResponse = await translateToJson(javaCode);
      const translatedJson = JSON.stringify(jsonResponse.data, null, 2)
      console.log(translatedJson)
       setJsonData(translatedJson);
    }

    const ConvertButton = () =>{
      return (
        <Button size="lg" onClick={() =>convertJavaCodeToJsonData(javaCode)}>
        Convert
      </Button>
      )
    }
  
    return (
<div className='flex flex-column justify-center'>
        <div className='mr-10'>
  
<JavaEditor  javaEditorTitle={javaEditorTitle} javaCode={javaCode} handleJavaCodeOnChange={handleJavaCodeOnChange}  />  
    <ConvertButton/>
        </div>
        <JsonEditor jsonDataTitle={jsonDataTitle} jsonData={jsonData} handleJsonDataOnChange={handleJsonDataOnChange} readOnlyState={readOnlyState}/>
      </div>
    );
}

export default Translation;