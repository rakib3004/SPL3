import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Translation from "./pages/Translation";
import RepoTranslation from "./pages/RepoTranslation";
import Datasets from "./pages/Datasets";
import Prompt from "./pages/Prompt";
import Reconstruction from "./pages/Reconstruction";
import Info from "./pages/Info";
import Analytics from "./pages/Analytics";
import About from "./pages/About";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/translation" element={<Translation />} />
        <Route exact path="/repo-translation" element={<RepoTranslation />} />
        <Route exact path="/datasets" element={<Datasets />} />
        <Route exact path="/prompt" element={<Prompt />} />
        <Route exact path="/reconstruction" element={<Reconstruction/>} />
        <Route exact path="/info" element={<Info/>} />
        <Route exact path="/analytics" element={<Analytics/>} />
        <Route exact path="/about" element={<About/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
