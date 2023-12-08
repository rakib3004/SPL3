
import { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-java';

const Editor = () => {
    const [javaCode, setJavaCode] = useState('');
    const [jsonOutput, setJsonOutput] = useState('');
  
    const handleJavaCodeChange = (newCode) => {
      setJavaCode(newCode);
  
      const jsonResult = convertJavaToJson(newCode);
      setJsonOutput(jsonResult);
    };
  
    const convertJavaToJson = (javaCode) => {
    
      try {
        const jsonObject = JSON.stringify({ javaCode });
        return jsonObject;
      } catch (error) {
        return `Error converting Java to JSON: ${error.message}`;
      }
    };
  
    return (
      <div>
        <div>
          <h2>Java Code Editor</h2>
          <AceEditor
            mode="java"
            theme="monokai"
            onChange={handleJavaCodeChange}
            value={javaCode}
            fontSize={14}
            width="100%"
            height="200px"
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

export default Editor;