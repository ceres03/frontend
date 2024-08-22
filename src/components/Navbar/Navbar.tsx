import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import cereslogo from '../../assets/logoOfc.png'
import { Spin as Hamburger } from "hamburger-react";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const email = usuario.email;
  const admin: boolean = email == 'root@root.com'

  return (
    <>
      <nav className=" flex justify-between  text-[#515839] py-6 pl-8 md:pl-32 drop-shadow-md font-sansita bg-[#ffffff] w-full">
        <Link to={"/?scrollTo=home"} className="">
          <img
            src={cereslogo}
            alt="Logotipo"
            className="w-24 hover:scale-105 transition-all justify-self-center"
          />
        </Link>
        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base ml-[3%]">
          <li>
            <Link to="/?scrollTo=home" className="nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos" className="nav">
              Produtos
            </Link>
          </li>
          <li>
            <Link to='/?scrollTo=sobre' className="nav">
              Sobre nós
            </Link>
          </li>
          {admin ?
            <>
              <li>
                <Link to="/cadastroProduto" className="nav">
                  Criar Produto
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
            </>
            : null}
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
            <Link to={"/"}>Home</Link>
          </li>
          <li className="lit">
            <Link to="/sobre">Sobre nós</Link>
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
