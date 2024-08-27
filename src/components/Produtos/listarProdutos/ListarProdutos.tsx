import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProdutos/CardProdutos";
import { toastAlerta } from "../../../utils/toastAlerta";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "erro");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);
  return (
    <>
      {produtos.length === 0 && (
        <div className="flex justify-center items-center h-screen w-full mt-20">
          <ThreeDots
            visible={true}
            height="200"
            width="200"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ justifyContent: "center" }}
            wrapperClass=""
          />
        </div>
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 mt-32">
        {produtos &&
          produtos?.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              imagem={produto.imagem}
              descricao={produto.descricao}
              preco={produto.preco}
              quantidade={produto.quantidade}
              quantidadeNoCarrinho={produto.quantidadeNoCarrinho}
              usuario={produto.usuario}
              categoria={produto.categoria}
            />
          ))}
      </div>
    </>
  );
}

export default ListaProdutos;
