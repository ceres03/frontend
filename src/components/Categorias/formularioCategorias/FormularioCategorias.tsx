import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function FormularioCategorias() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
    console.log(JSON.stringify(categoria));
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        alert("Categoria atualizada com sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao atualizar a Categoria");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });

        alert("Categoria cadastrada com sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao cadastrar a Categoria");
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricao === "";

  return (
    <div className=" flex flex-col items-center h-[70vh] pt-[7%] mx-auto mt-32">
      <h1 className="text-4xl text-center my-8 text-[#515839] font-semibold">
        {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form onSubmit={gerarNovaCategoria} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-[#515839] font-medium">
            Nome da categoria
          </label>
          <input
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-[#515839] font-medium">
            Descrição da categoria
          </label>
          <input
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded-[15px] disabled:bg-[#E5EACB] bg-[#C8D198] hover:bg-[#7C8758] text-white font-bold w-1/3 mx-auto block py-2 transition-all duration-[0.15s]"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategorias;
