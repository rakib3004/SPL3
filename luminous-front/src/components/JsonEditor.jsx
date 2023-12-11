import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';

// eslint-disable-next-line react/prop-types
const JsonEditor = ({jsonDataTitle, jsonData, handleJsonDataOnChange, readOnlyState}) => {
  
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
      height="450px"
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      editorProps={{ $blockScrolling: Infinity }}
      readOnly={readOnlyState}
    />
  </div>
  )
}

export default JsonEditor;