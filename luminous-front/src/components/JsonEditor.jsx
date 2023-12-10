import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';

const JsonEditor = ({jsonDataTitle, jsonData, setJsonData, handleJsonDataOnChange}) => {
  
  return (
    <div>
    <h2 className='font-bold'>{jsonDataTitle}</h2>
    <AceEditor
      mode="java"
      theme="monokai"
      onChange={handleJsonDataOnChange}
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