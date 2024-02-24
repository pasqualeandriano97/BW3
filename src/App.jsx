import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CombineProfilePage from "./components/CombineProfilePage";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Messagistica from "./components/Messaggistica";
import Job from "./components/Job";
import SearchPage from "./components/SearchPageComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light ">
        <NavbarComponent />
        <Routes>
          <Route path="/profile/:username" element={<CombineProfilePage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Lavoro/:query" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Lavoro" element={<Job />} />
        </Routes>
        <Messagistica />
      </div>
    </BrowserRouter>
  );
}

export default App;
