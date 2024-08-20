import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import ListarCategorias from "./components/Categorias/listarCategorias/ListarCategorias";
import FormularioCategorias from "./components/Categorias/formularioCategorias/FormularioCategorias";
import DeletarCategorias from "./components/Categorias/deletarCategorias/DeletarCategorias";
import ListaProdutos from "./components/Produtos/listarProdutos/ListarProdutos";
import FormularioProdutos from "./components/Produtos/formularioProdutos/FormularioProdutos";
import DeletarProdutos from "./components/Produtos/deletarProdutos/DeletarProdutos";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategorias />}
            />
            <Route
              path="/editarCategoria/:id"
              element={<FormularioCategorias />}
            />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategorias />}
            />
            <Route path="/produtos" element={<ListaProdutos />} />
            <Route path="/cadastroProduto" element={<FormularioProdutos />} />
            <Route
              path="/editarProdutos/:id"
              element={<FormularioProdutos />}
            />
            <Route path="/deletarProdutos/:id" element={<DeletarProdutos />} />
            <Route path="/Sobre" element={<Sobre />} />
          </Route>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
