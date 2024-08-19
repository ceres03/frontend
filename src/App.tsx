
import "./index.css";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cadastro from "./pages/Cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import ListarCategorias from "./components/Categorias/listarCategorias/ListarCategorias";
import FormularioCategorias from "./components/Categorias/formularioCategorias/FormularioCategorias";
import DeletarCategorias from "./components/Categorias/deletarCategorias/DeletarCategorias";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategorias />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
