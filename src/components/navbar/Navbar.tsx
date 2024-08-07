import "./Navbar.css";

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
              <a href="#" className="nav">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="nav">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="nav">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="nav">
                Cadastro
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
