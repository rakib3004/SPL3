
import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";
const About = () => {
  return (
    <div>
    <Accordion>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>What is Software Reconstruction Toolkit?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
        In the Software Reconstruction Tool, users will be able to input their existing software code, 
        design, diagram, and related artifacts. The tool should efficiently analyze and evaluate the 
        complexity of the code, highlighting areas that need improvement for reconstruction. It will
         then provide clear and actionable suggestions for refactoring and modernizing the codebase.
          Additionally, for better outcomes from the tool, design input prompts that guide the Large
           Language Models (LLMs) in generating code enhancements. Finally, the tool also provides 
           a benchmark to evaluate the performance of the LLMs in generating code improvements and
            provides a comprehensive view of the results.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>How do I customize the color scheme of components?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          The Keep React offers a range of color variants for components. To customize the color scheme, you can use the
          available color options such as gray,info,error,warning and success. Simply set the desired color variant as a
          prop when using the component, and it will reflect the chosen color.
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Container>
          <Accordion.Title>Can I add additional content to notifications?</Accordion.Title>
          <Accordion.Icon>
            <Plus size={24} color="#444" />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content>
          Yes, the Notification component in the Keep React allows you to include extra content alongside the primary
          message. The additionalContent prop can be used to display supplementary information, such as buttons, links,
          or icons, within the notification to provide users with more context and options.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  )
}

export default About;