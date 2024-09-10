import "../parceiros/Parceiros.css";
import parceiros from "../../assets/parceiros.png";

function Parceiros() {
  return (
    <div
      className="sobre-container flex-col lg:flex-row py-8 mb-8"
      id="parceiros"
    >
      <div className="image-container order-last lg:order-first">
        <img src={parceiros} alt="Imagem de parceiros" />
      </div>
      <div className="text-container m-12 ">
        <h1 className="text-3xl md:text-4xl font-bold">Parceiros da Ceres</h1>
        <p className="break-normal hyphens-auto">
          Trabalhando diretamente com pequenos e médios produtores locais,
          promovemos a valorização e o reconhecimento desses profissionais,
          permitindo que alcancem uma base mais ampla e diversificada. Além
          disso, os agricultores se beneficiam de uma estrutura de preços mais
          justa ao mesmo tempo que ajuda a atender às necessidades de
          comunidades vulneráveis, oferecendo produtos de qualidade a preços
          acessíveis.
        </p>
        <button className="saiba-mais-button">Saiba mais ↗</button>
      </div>
    </div>
  );
}

export default Parceiros;
