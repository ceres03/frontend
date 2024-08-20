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
            <Link className="nav" to="/sobre">
              Sobre nós
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
            className="py-2 pl-10 ml-20 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>
        <div
          className="xl:hidden block text-5xl cursor-pointer"
          onClick={() => setOpen(!isOpen)}
        >
          <Hamburger />
        </div>
        <div
          className={`absolute xl:hidden top-24 left-0 p-4 w-full bg-white flex flex-col items-center gap-6 text-lg transform transition-transform ${
            isOpen ? "opacity-100" : "opacity-0"
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
