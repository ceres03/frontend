import "../sobre/Sobre.css";

function Sobre() {
  return (
    <div className="sobre-container" id="sobre">
      <div className="text-container">
        <h1>Sobre a Ceres</h1>
        <p>
          Um aplicativo voltado para distribuição e aumento de visibilidade de
          produtores locais e produtos para agricultores. Preços descentralizados
          do mercado padrão (idealmente menores) voltados para a população
          vulnerável das cidades.
        </p>
        <button className="saiba-mais-button">Saiba mais ↗</button>
      </div>
      <div className="image-container">
        <img src="src/assets/sobre.png" alt="Imagem de agricultura" />
      </div>
    </div>
  );
}

export default Sobre;
