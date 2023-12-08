
import { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';

const Json = () => {
    const [actualJSON, setActualJSON] = useState('');
    const [gptJSON, setGptJSON] = useState('');

  
    const handleActualJSON = (newCode) => {
        setActualJSON(newCode);
    };

    const handleGptJSON = (newCode) => {
        setGptJSON(newCode);
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
          <h2>Translated Json</h2>
          <AceEditor
            mode="java"
            theme="monokai"
            onChange={handleActualJSON}
            value={actualJSON}
            fontSize={14}
            width="100%"
            height="320px"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: Infinity }}
          />
        </div>
        <div>
          <h2>GPT Response JSON</h2>
          <AceEditor
            mode="java"
            theme="monokai"
            onChange={handleGptJSON}
            value={gptJSON}
            fontSize={14}
            width="100%"
            height="320px"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            editorProps={{ $blockScrolling: Infinity }}
          />
        </div>
        </div>

    );
}

export default Json;