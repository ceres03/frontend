import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import logoOfc from "../../assets/logoOfc.png";
import { Bag, CheckCircle, Circle, Storefront } from "@phosphor-icons/react";
import { toastAlerta } from "../../utils/toastAlerta";
function Cadastro() {
  const navigate = useNavigate();

  const [tipoUsuario, setTipoUsuario] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleExternalSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        toastAlerta("Usuário cadastrado com sucesso", "sucesso");
      } catch (error) {
        toastAlerta("Erro ao cadastrar o Usuário", "erro");
      }
    } else {
      toastAlerta("Dados inconsistentes. Verifique as informações de cadastro.", "info");
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  return (
    <div className="flex flex-col sm:h-screen container mx-auto p-4 cadastro">
      <div className="flex justify-center mt-4">
        <Link to="/">
          <img
            src={logoOfc}
            className="w-[100px] hover:scale-110 transition-all duration-[.5s]"
          />
        </Link>
      </div>
      <div className="mt-10">
        <p className="text-[#515839] font-bold text-center sm:text-start">
          Qual seu objetivo no Ceres?
        </p>
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row mt-4 gap-4">
          <button
            className={`border-[1px] border-black rounded-md w-[265px] flex justify-evenly items-center ${
              tipoUsuario === "vendedor" ? "bg-[#E5EACB]" : "bg-[white]"
            }`}
            onClick={() => {
              setTipoUsuario("vendedor");
            }}
          >
            {tipoUsuario === "vendedor" ? <CheckCircle /> : <Circle />}
            <p>Quero vender</p>
            <Storefront size={32} />
          </button>
          <button
            className={`border-[1px] border-black rounded-md w-[265px] flex justify-evenly items-center ${
              tipoUsuario === "comprador" ? "bg-[#E5EACB]" : "bg-white"
            }`}
            onClick={() => {
              setTipoUsuario("comprador");
            }}
          >
            {tipoUsuario === "comprador" ? <CheckCircle /> : <Circle />}
            <p>Quero comprar</p>
            <Bag size={32} />
          </button>
        </div>
      </div>
      <form
        className="mt-14 grid sm:grid-flow-col"
        ref={formRef}
        onSubmit={cadastrarNovoUsuario}
      >
        <div className="flex flex-col sm:pr-10">
          <label className="text-[#515839] font-bold" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Insira o Nome"
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
          <label className="text-[#515839] font-bold" htmlFor="telefone">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Insira o telefone"
            value={usuario.telefone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
          <label className="text-[#515839] font-bold" htmlFor="senha">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Insira a senha"
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="text-[#515839] font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Insira o email"
            value={usuario.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
          <label className="text-[#515839] font-bold" htmlFor="foto">
            Foto (Link)
          </label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="Foto"
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
          <label
            className="text-[#515839] font-bold order-first sm:order-last"
            htmlFor="confirmarSenha"
          >
            Confirmar Senha
          </label>
          <input
            className="order-first sm:order-last"
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleConfirmarSenha(e)
            }
          ></input>
        </div>
      </form>
      <div className="flex justify-center sm:justify-between gap-12">
        <button className="bg-[#E5EACB] text-[#515839]" onClick={back}>
          Cancelar
        </button>
        <button
          className="bg-[#515839] text-white"
          type="submit"
          onClick={handleExternalSubmit}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
export default Cadastro;
