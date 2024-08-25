import "../sobre/Sobre.css";
import sobrepng from "../../assets/sobre.png";
function Sobre() {
  return (
    <div
      className="sobre-container flex-col lg:flex-row ml-[4%] my-10"
      id="sobre"
    >
      <div className="text-container font-poppins">
        <h1>Sobre a Ceres</h1>
        <p>
          Um aplicativo voltado para distribuição e aumento de visibilidade de
          produtores locais e produtos para agricultores. Preços
          descentralizados do mercado padrão (idealmente menores) voltados para
          a população vulnerável das cidades.
        </p>
        <button className="saiba-mais-button">Saiba mais ↗</button>
      </div>
      <div className="image-container">
        <img src={sobrepng}></img>
      </div>
    </div>
  );
}

export default Sobre;
