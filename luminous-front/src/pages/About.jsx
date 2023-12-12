
import { Button,Spinner } from "keep-react";

const About = () => {
  return (
    <Button type="primary" size="md">
    <span className="pr-2">
      <Spinner color="info" size="md" />
   </span>
    Please wait .. .. ..
  </Button>
  )
}

export default About;