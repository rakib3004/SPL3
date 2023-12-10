
import JavaEditor from '../components/JavaEditor';
import JsonEditor from '../components/JsonEditor';
import { Button } from "keep-react";
import { useState } from "react";

const Translation = () => {
  const javaEditorTitle = "Java Code"
  const [javaCode, setJavaCode] = useState("");
  const handleJavaCodeOnChange = (newCode) => {
    setJavaCode(newCode);
  };

  const javaEditorProps = {
    javaEditorTitle: javaEditorTitle,
    javaCode: javaCode,
    setJavaCode: setJavaCode,
    handleJavaCodeOnChange: handleJavaCodeOnChange,
  };
  
  
  const jsonDataTitle = "Json Data"
  const [jsonData, setJsonData] = useState('');
  const handleJsonDataOnChange = (newCode) => {
    setJsonData(newCode);
  };

  const jsonEditorProps = {
    jsonDataTitle: jsonDataTitle,
    jsonData: jsonData,
    setJsonData: setJsonData,
    handleJsonDataOnChange: handleJsonDataOnChange,
  };
  

  

   
    // const convertJavaToJson = (javaCode) => {
    
    //   try {
    //     const jsonObject = JSON.stringify({ javaCode });
    //     return jsonObject;
    //   } catch (error) {
    //     return `Error converting Java to JSON: ${error.message}`;
    //   }
    // };
    const convertJavaCodeToJsonData = () =>{

    }

    const ConvertButton = () =>{
      return (
        <Button size="lg" onClick={convertJavaCodeToJsonData}>
        Convert
      </Button>
      )
    }
  
    return (
<div className='flex flex-column justify-center'>
        <div className='mr-10'>
  
<JavaEditor {...javaEditorProps} />  
    <ConvertButton/>
        </div>
        <JsonEditor {...jsonEditorProps}/>
      </div>
    );
}

export default Translation;