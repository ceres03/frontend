import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
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
