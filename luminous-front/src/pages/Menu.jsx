import { Button } from "keep-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigateTo = useNavigate();

  const goToTranslation = () => {
    navigateTo("/translation");
  };

  const goToRepoTranslation = () => {
    navigateTo("/repo-translation");
  };

  const goToPrompt = () => {
    navigateTo("/prompt");
  };

  const goToReconstruction = () => {
    navigateTo("/reconstruction");
  };

  const goToInfo = () => {
    navigateTo("/info");
  };

  const goToAnalysis = () => {
    navigateTo("/analysis");
  };

  return (
    <div  className="ml-40">
    <div className="ml-96">
      <div className="mb-6">
        <Button size="lg" onClick={goToTranslation}>
          Java Code To JSON Translation
        </Button>
      </div>

      <div className="mb-6">
        <Button size="lg" onClick={goToTranslation}>
          Java Code To JSON Translation
        </Button>
      </div>

      <div className="mb-6">
        <Button size="lg" onClick={goToRepoTranslation}>
          Java Repository Translation
        </Button>
      </div>

      <div className="mb-6">
        <Button size="lg" onClick={goToPrompt}>
          Prompt Engineering
        </Button>
      </div>

      <div className="mb-6">
        <Button size="lg" onClick={goToReconstruction}>
          Reconstruction
        </Button>
      </div>

      <div className="mb-6">
        <Button size="lg" onClick={goToInfo}>
          JSON Info
        </Button>
      </div>

      <div className="mb-6">
        <Button size="lg" onClick={goToAnalysis}>
          Reconstruction Analysis
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Menu;
