import "./Navbar.css";
import { Link } from "react-router-dom";
import cereslogo from "../../assets/ceres2.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center text-black py-6 px-8 md:px-32 drop-shadow-md bg-slate-800">
        <Link to={"/Home"}>
          <img
            src={cereslogo}
            alt="Logotipo"
            className="w-20 hover:scale-105 transition-all"
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="nav">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li className="nav">
            <Link to="/sobre">Sobre nós</Link>
          </li>
          <li className="nav">
            <Link to="/sobre">Contato</Link>
          </li>
          <li className="nav">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav">
            <Link to="/cadastro">Cadastro</Link>
          </li>
        </ul>
        <div className="relative hidden md:flex items-center justify-center gap-3">
          <i
            className="bx bx-search
          absolute left-3 text-2xl text-gray-500"
          ></i>
          <input
            type="text"
            placeholder="Pesquisar"
            className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
          />
        </div>
        <i
          className=" bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
        <div
          className={`absolute xl:hidden top-24 left-0 p-4 w-full bg-slate-800 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          {" "}
          <li className="lit">
            <Link to={"/Home"}>Home</Link>
          </li>
          <li className="lit">
            <Link to="/sobre">Sobre nós</Link>
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
