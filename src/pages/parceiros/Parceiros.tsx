import "../parceiros/Parceiros.css";
import parceiros from "../../assets/parceiros.png"

function Parceiros() {
  return (
    <div className="sobre-container" id="parceiros">
      <div className="image-container">
        <img src={parceiros} alt="Imagem de parceiros" />
      </div>
      <div className="text-container">
        <h1>Parceiros da Ceres</h1>
        <p>
          Trabalhando diretamente com pequenos e médios produtores locais, promovemos a valorização e o reconhecimento desses profissionais que, muitas vezes, têm sua produção limitada pelo alcance reduzido de seus produtos. Através do Ceres, oferecemos uma plataforma que amplifica sua visibilidade no mercado, permitindo que alcancem uma base de consumidores mais ampla e diversificada. Além disso, os agricultores se beneficiam de uma estrutura de preços mais justa e descentralizada, que contribui para a sustentabilidade de suas operações, ao mesmo tempo que ajuda a atender às necessidades de comunidades vulneráveis, oferecendo produtos de qualidade a preços acessíveis.
        </p>
        <button className="saiba-mais-button">Saiba mais ↗</button>
      </div>
    </div>
  );
}

export default Parceiros;
