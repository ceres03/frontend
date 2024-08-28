import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Produto from "../../models/Produto";
import { toastAlerta } from "../../utils/toastAlerta";

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
    toastAlerta("Produto removido do carrinho", "info")
  }

  function verProdutos() {
    navigate("/produtos");
  }

  return (
    <section className="py-32 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="font-poppins font-bold text-4xl leading-10 mb-8 text-center text-[#515839]">
          Carrinho de Compras
        </h2>
        {produtos.length === 0 ? (
          <div className="text-center">
            <p className="font-poppins text-[#393939] text-xl">Seu carrinho está vazio!</p>
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
              <div key={produto.id} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                <div className="col-span-12 lg:col-span-2">
                  <img src={produto.imagem} alt={produto.nome} className="max-lg:w-full lg:w-[180px] rounded-lg" />
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <div className="flex items-center justify-between w-full mb-4">
                    <h5 className="font-poppins font-bold text-2xl leading-9 text-[#393939]">{produto.nome}</h5>
                    <button onClick={() => removerProduto(produto.id)} className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx="17" cy="17" r="17" fill="" />
                        <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white" d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                    {produto.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button onClick={() => diminuirQuantidade(produto)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <input type="text" value={produto.quantidadeNoCarrinho} readOnly className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center" />
                      <button onClick={() => acrescentarQuantidade(produto)} className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-[#515839] font-poppins font-semibold text-2xl leading-9 text-right">R$ {(produto.preco * produto.quantidadeNoCarrinho).toFixed(2).replace('.', ',')}</h6>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
              <h5 className="text-[#595959] font-poppins font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">Total</h5>
              <div className="flex items-center gap-2">
                <h6 className="font-poppins font-semibold text-2xl leading-10 text-[#515839]">R$</h6>
                <h6 className="font-poppins font-semibold text-2xl leading-10 text-[#515839]">{total.toFixed(2).replace('.', ',')}</h6>
              </div>
            </div>
            <div className="max-lg:max-w-lg max-lg:mx-auto">
              <p className="font-poppins font-normal text-base leading-7 text-[#DE5D22] text-center mb-5 mt-6">
                O valor de R$ {(total * 0.10).toFixed(2).replace('.', ',')} da sua compra será revertido para ONGs ou restaurantes comunitários.
              </p>
              <button
                onClick={() => {
                  if (!token) {
                    toastAlerta("Você precisa estar logado para finalizar a compra.", "info");
                    navigate("/login");
                    return;
                  }
                }}
                className="font-poppins text-base leading-6 py-4 px-8 bg-[#515839] hover:bg-[#7C8758] text-white rounded-md flex justify-center items-center w-full transition-all duration-500"
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Carrinho;
