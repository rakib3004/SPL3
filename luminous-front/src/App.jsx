import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Editor from "./pages/Editor";
import Json from "./pages/Json";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/editor" element={<Editor />} />
        <Route exact path="/output" element={<Json />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
