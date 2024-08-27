import "../sobre/Sobre.css";
import sobrepng from "../../assets/sobre.png";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="sobre-container flex-col lg:flex-row my-10" id="sobre">
      <div className="text-container font-poppins">
        <h1 className="text-3xl md:text-4xl font-bold">Sobre a Ceres</h1>
        <p className="break-normal hyphens-auto">
          Um aplicativo voltado para distribuição e aumento de visibilidade de
          produtores locais e produtos para agricultores. Preços
          descentralizados do mercado padrão voltados para a população
          vulnerável das cidades.
        </p>
        <Link to='/sobreNos'>
          <button className="saiba-mais-button">Saiba mais ↗</button>
        </Link>
      </div>
      <div className="image-container">
        <img src={sobrepng}></img>
      </div>
    </div>
  );
}

export default Sobre;
