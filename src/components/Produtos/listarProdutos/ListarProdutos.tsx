import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardProdutos/CardProdutos";
import { toastAlerta } from "../../../utils/toastAlerta";
import LoadingPage from "../../LoadingPage.tsx/LoadingPage";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

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
      {produtos.length === 0 ? (
        <LoadingPage />
      ) : (
        <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 mt-32">
          {produtos.map((produto) => (
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
      )}
    </>
  );
}

export default ListaProdutos;
