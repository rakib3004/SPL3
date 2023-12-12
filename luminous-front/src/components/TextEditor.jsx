import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-java';

// eslint-disable-next-line react/prop-types
const TextEditor = ({jsonData, handleJsonDataOnChange}) => {
  
  return (
    <div>
    <AceEditor
      mode="java"
      theme="monokai"
      onChange={handleJsonDataOnChange}
      value={jsonData}
      fontSize={18}
      width="300px"
      height="150px"
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      editorProps={{ $blockScrolling: Infinity }}
      wrapEnabled={true} 
    />
  </div>
  )
}

export default TextEditor;