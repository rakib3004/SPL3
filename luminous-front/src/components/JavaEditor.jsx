import { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-java";

const JavaEditor = () => {
  const title = "Java Code"

  const [javaCode, setJavaCode] = useState("");

  const handleJavaCodeChange = (newCode) => {
    setJavaCode(newCode);
  };

  return (
    <div>
      <h2 className='font-bold'>{title}</h2>
      <AceEditor
        mode="java"
        theme="monokai"
        onChange={handleJavaCodeChange}
        value={javaCode}
        fontSize={14}
        width="600px"
        height="500px"
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: Infinity }}
      />
    </div>
  );
};

export default JavaEditor;
