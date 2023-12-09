import { Button } from "keep-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigateTo = useNavigate();

  const goToMenuPage = () => {
    navigateTo("/translation");

  };
  return (
    <div>
      <div className="justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl text-gray-700 mb-4">
            Welcome to Re-builder Toolkit
          </h1>
          <img
            src="welcome-software-system-reconstruction.gif"
            alt="Example GIF"
            className="mb-4"
          />
          <Button size="lg" onClick={goToMenuPage}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
