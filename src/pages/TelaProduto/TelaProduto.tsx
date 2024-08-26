import { useContext, useEffect, useState } from "react";
import { Bag } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import Produto from "../../models/Produto";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { toastAlerta } from "../../utils/toastAlerta";

function TelaProduto() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  function retornar() {
    navigate("/produtos");
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
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
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  if (!produto) {
    return (
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
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full items-center md:items-stretch h-auto m-auto p-4 md:p-[5%] content pt-24">
      <div className="flex w-full md:w-[50%] m-5 rounded-[50px] justify-center">
        <img
          src={produto.imagem}
          alt="foto do produto"
          className="rounded-[30px] w-full h-auto"
        />
      </div>

      <section className="flex flex-col w-full md:w-[50%] m-5 p-5 border rounded-[30px]">
        <div className="flex flex-col">
          <h1 className="text-[#393939] text-[24px] md:text-[32px]">{produto.nome}</h1>
          <div className="flex items-center mt-1">
            <span className="text-[#393939] text-[12px] md:text-[16px] font-medium">5.0</span>
          </div>
        </div>

        <div className="text-[32px] md:text-[64px] mt-2 font-bold text-[#515839]">
          R$ {produto.preco.toFixed(2).replace('.', ',')}
        </div>

        <div className="flex items-center bg-[#E5EACB8F] mt-4 p-2 rounded-xl">
          <img
            src={produto.usuario.foto}
            alt="Foto Vendedor"
            className="rounded-full w-10 h-10"
          />
          <div className="ml-3">
            <h6 className="text-[12px] text-[#515839]">vendido por</h6>
            <h3 className="text-[16px] md:text-[24px] font-semibold text-[#515839]">
              {produto.usuario.nome}
            </h3>
          </div>
        </div>
        <div className="mt-4 border rounded-xl p-3">
          <h3 className="text-[#393939] font-medium">Descrição</h3>
          <p className="text-[#393939] pt-2 text-sm md:text-base">{produto.descricao}</p>
        </div>

        <div className="flex border mt-4 p-3 justify-between rounded-xl">
          <p className="text-[#393939] font-medium text-sm md:text-base">Quantidade Disponivel</p>
          <p className="text-[#515839] font-medium text-sm md:text-base">
            + {produto.quantidade} unidades disponíveis
          </p>
        </div>

        <a href="#" className="flex mt-6">
          <button className="flex rounded-xl w-full h-14 justify-center items-center bg-[#515839] text-white gap-2 font-bold">
            Comprar agora <Bag size={32} />
          </button>
        </a>
        <a href="#">
          <button className="mt-4 flex rounded-xl w-full h-14 justify-center items-center bg-[#E5EACB] text-[#515839] gap-2 font-bold">
            Adicionar ao carrinho <Bag size={32} />
          </button>
        </a>
      </section>
    </div>
  );
}

export default TelaProduto;
