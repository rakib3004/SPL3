import React from "react";
import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

const About = () => {
  return (
    <div>
      <h1>What is Software Reconstruction Toolkit?</h1>
           <p>In the Software Reconstruction Tool, users will be able to input their existing software code, 
            design, diagram, and related artifacts. The tool should efficiently analyze and evaluate the 
            complexity of the code, highlighting areas that need improvement for reconstruction. It will
            then provide clear and actionable suggestions for refactoring and modernizing the codebase.
            Additionally, for better outcomes from the tool, design input prompts that guide the Large
            Language Models (LLMs) in generating code enhancements. Finally, the tool also provides 
            a benchmark to evaluate the performance of the LLMs in generating code improvements and
            provides a comprehensive view of the results.</p>
       
    </div>
  );
};

export default About;
