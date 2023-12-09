
import JavaEditor from '../components/JavaEditor';
import JsonEditor from '../components/JsonEditor';
import { Button } from "keep-react";

const Translation = () => {
    // const [jsonOutput, setJsonOutput] = useState('');
  
   
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
        <JavaEditor />
      <ConvertButton/>
        </div>
        <JsonEditor/>
      </div>
    );
}

export default Translation;