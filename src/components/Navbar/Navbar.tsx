import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 flex justify-between items-center">
        <div className="w-16">
          <img
            src="https://avatars.githubusercontent.com/u/174135955?s=400&u=30f9c39aa29835ef8375bd394132b14d83e6cf6e&v=4"
            alt="Logotipo"
          />
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
              <Link to="" className="nav">
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
