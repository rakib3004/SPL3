import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";


// eslint-disable-next-line react/prop-types
const JavaEditor = ({ javaEditorTitle, javaCode, handleJavaCodeOnChange }) => {
 

  return (
    <div>
      <h2 className='font-bold'>{javaEditorTitle}</h2>
      <AceEditor
        mode="java"
        theme="monokai"
        onChange={handleJavaCodeOnChange}
        value={javaCode}
        fontSize={14}
        width="600px"
        height="450px"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: Infinity }}
      />
    </div>
  );
};

export default JavaEditor;
