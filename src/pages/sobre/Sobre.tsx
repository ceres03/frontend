import { useEffect } from "react";
import "../sobre/Sobre.css";

function Sobre() {
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const scrollTo = queryParams.get("scrollTo");

    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div
      className="sobre-container flex-col lg:flex-row container mx-auto my-10"
      id="sobre"
    >
      <div className="text-container">
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
        <img src="src/assets/sobre.png" alt="Imagem de agricultura" />
      </div>
    </div>
  );
}

export default Sobre;
