import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Produto from "../../models/Produto";

function Carrinho() {
  const [total, setTotal] = useState<number>(0);
  const { usuario } = useContext(AuthContext);
  const { produtos, setProdutos } = useContext(CartContext);
  const navigate = useNavigate();
  const token = usuario.token;

  function acrescentarQuantidade(produto: Produto) {
    setProdutos(anterior => {
      return anterior.map((a) => {
        if (a.id === produto.id) {
          if (a.quantidadeNoCarrinho < a.quantidade) {
            return { ...a, quantidadeNoCarrinho: a.quantidadeNoCarrinho + 1 };
          }
          return a;
        }
        return a;
      });
    });
  }
  

  function diminuirQuantidade(produto: Produto) {
    setProdutos(anterior => {
        return anterior.map((a) => {
          if (a.id === produto.id) {
            if (a.quantidadeNoCarrinho > 1) {
              return { ...a, quantidadeNoCarrinho: a.quantidadeNoCarrinho - 1 };
            }
            return a;
          }
          return a;
        });
      });
    }

  useEffect(() => {
    const subtotal = produtos.reduce(
      (acc, produto) => acc + produto.preco * produto.quantidadeNoCarrinho,
      0
    );
    setTotal(subtotal);
  }, [produtos]);

  function removerProduto(id: number) {
    setProdutos((prev) => prev.filter((produto) => produto.id !== id));
  }

  function verProdutos() {
    navigate("/produtos");
  }

  return (
    <div className="p-4 content py-52">
      {produtos.length === 0 ? (
        <div className="text-center">
          <p className="text-xl">Seu carrinho está vazio!</p>
          <button
            onClick={verProdutos}
            className="mt-4 px-4 py-2 bg-[#515839] text-white rounded"
          >
            Ver Produtos
          </button>
        </div>
      ) : (
        <div>
          {produtos.map((produto) => (
            <div key={produto.id} className="flex items-center justify-between my-4">
              <img src={produto.imagem} alt={produto.nome} className="w-20 h-20 rounded" />
              <div className="flex-1 ml-4">
                <p>{produto.nome}</p>
                <p>R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => diminuirQuantidade (produto)} className="m-4 px-2 py-1 bg-[#F77235] text-white rounded">-</button>
                <>{produto.quantidadeNoCarrinho}</>
                <button onClick={() => acrescentarQuantidade (produto)} className="m-4 px-2 py-1 bg-[#7C8758] text-white rounded">+</button>
              </div>
              <div className="text-right">
                <p>Subtotal: R$ {(produto.preco * produto.quantidadeNoCarrinho).toFixed(2).replace('.', ',')}</p>
                <button
                  onClick={() => removerProduto(produto.id)}
                  className="mt-2 px-2 py-1 bg-red-500 text-white rounded"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total: R$ {total.toFixed(2).replace('.', ',')}
            </p>
            <p className="mt-2 text-sm">
              10% do valor será revertido para ONGs ou restaurantes comunitários.
            </p>
            {token === "" && (
              <p className="mt-2 text-red-500">Você precisa estar logado para finalizar a compra.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
