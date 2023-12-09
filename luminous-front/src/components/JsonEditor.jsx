import { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';

const JsonEditor = () => {
  const title = "Json Data"
  const [jsonData, setJsonData] = useState('');
  const handleJsonData = (newCode) => {
    setJsonData(newCode);
  };
  return (
    <div>
    <h2 className='font-bold'>{title}</h2>
    <AceEditor
      mode="java"
      theme="monokai"
      onChange={handleJsonData}
      value={jsonData}
      fontSize={14}
      width="600px"
      height="500px"
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      editorProps={{ $blockScrolling: Infinity }}
    />
  </div>
  )
}

export default JsonEditor;