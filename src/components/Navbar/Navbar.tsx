import "./Navbar.css";
import { Link } from "react-router-dom";
import cereslogo from "../../assets/Ceres1.png";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 flex justify-between items-center">
        <div className="w-16">
          <img src={cereslogo} alt="Logotipo" />
        </div>
        <div className="">
          <ul className="flex items-center gap-[2vw] mr-3">
            <li>
              <Link to={"/Home"} className="nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="nav">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="nav">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav">
                Login
              </Link>
            </li>
            <li>
              <Link to="/cadastro" className="nav">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
