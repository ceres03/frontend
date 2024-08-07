import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
