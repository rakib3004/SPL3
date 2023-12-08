
import { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';

const Json = () => {
    const [jsonData, setJsonData] = useState('');
    const [jsonOutput, setJsonOutput] = useState('');
  
    const handleJsonDataChange = (newCode) => {
      setJsonData(newCode);
  
      const jsonResult = convertJavaToJson(newCode);
      setJsonOutput(jsonResult);
    };
  
    const convertJavaToJson = (jsonData) => {
    
      try {
        const jsonObject = JSON.stringify({ jsonData });
        return jsonObject;
      } catch (error) {
        return `Error converting Java to JSON: ${error.message}`;
      }
    };
  
    return (
      <div>
        <div>
          <h2>Json Output</h2>
          <AceEditor
            mode="java"
            theme="monokai"
            onChange={handleJsonDataChange}
            value={jsonData}
            fontSize={14}
            width="100%"
            height="420px"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: Infinity }}
          />
        </div>
        <div>
          <h2>JSON Output</h2>
          <pre>{jsonOutput}</pre>
        </div>
      </div>
    );
}

export default Json;