import "./Navbar.css";
import { Link } from "react-router-dom";
import cereslogo from "../../assets/ceres2.png";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className=" flex justify-between items-center text-[#515839] py-6 px-8 md:px-32 drop-shadow-md font-sansita bg-[#ffffff]">
        <Link to={"/Home"} className="">
          <img
            src={cereslogo}
            alt="Logotipo"
            className="w-20 h-auto hover:scale-105 transition-all mt-0"
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li>
            <Link className="nav" to={"/Home"}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos" className="nav">
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/cadastroProduto" className="nav">
              Criar Produto
            </Link>
          </li>
          <li>
            <a href="#sobre" className="nav">
              Sobre nós
            </a>
          </li>
          <li>
          <Link to="/parceiros" className="nav">
               Parceiros  
          </Link>
          </li>
          <li>
            <Link className="nav" to="/categorias">
              Categoria
            </Link>
          </li>
          <li>
            <Link className="nav" to="/cadastroCategoria">
              Cadastrar Categoria
            </Link>
          </li>
          <li>
            <Link className="nav" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="nav" to="/cadastro">
              Cadastro
            </Link>
          </li>
        </ul>
        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i
            className="bx bx-search
            absolute left-24   text-2xl text-gray-500"
          ></i>
          <input
            type="text"
            placeholder="Pesquisar"
            className="py-2 pl-10 ml-20 rounded-xl border-2 border-[#515839] focus:bg-[#e5eacb75] focus:outline-[#515839] transition-all duration-[.15s]"
          />
        </div>
        <div
          className="xl:hidden block text-5xl cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger />
        </div>
        <div
          className={`absolute xl:hidden top-24 left-0 p-4 w-full bg-white flex flex-col items-center gap-6 text-lg transform transition-transform ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
        >
          {" "}
          <li className="lit">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li className="lit">
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li className="lit">
            <Link to="/parceiros">Parceiros</Link>
          </li>
          <li className="lit">
            <Link to="/produtos">Produtos</Link>
          </li>
          <li className="lit">
            <Link to="/cadastroProduto">Criar Produto</Link>
          </li>
          <li className="lit">
            <Link to="/categorias">Categoria</Link>
          </li>
          <li className="lit">
            <Link to="/cadastroCategoria">Cadastrar Categoria</Link>
          </li>
          <li className="lit">
            <Link to="/sobre">Contato</Link>
          </li>
          <li className="lit">
            <Link to="/login">Login</Link>
          </li>
          <li className="lit">
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
