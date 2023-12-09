import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Translation from "./pages/Translation";
import Prompt from "./pages/Prompt";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/editor" element={<Translation />} />
        <Route exact path="/output" element={<Prompt />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
