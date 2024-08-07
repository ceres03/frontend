import Teste from "./components/Teste";
import Teste2 from "./components/Teste2";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teste />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/teste2" element={<Teste2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
