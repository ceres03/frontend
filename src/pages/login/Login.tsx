import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  Link,
  useNavigate,
} from "../../../node_modules/react-router-dom/dist/index";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import "./Login.css";
import imageLogin from "../../assets/loginImage.png";
import logoOfc from "../../assets/logoOfc.png";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex h-[100vh] max-w-[1920px] mx-auto">
      <img src={imageLogin} className="h-full hidden lg:flex" />
      <div className="flex justify-center items-center flex-col w-full ">
        <Link to="/">
          <img
            src={logoOfc}
            className="w-[110px] hover:scale-110 transition-all duration-[.5s]"
          />
        </Link>
        <p className="mt-[8px] font-semibold text-[48px] text-[#515839]">
          Boas vindas
        </p>
        <p className=" font-normal text-[20px] text-[#515839]">
          Vamos as compras?
        </p>
        <form
          className="mt-10 flex flex-col w-[380px] lg:w-[500px]  px-4"
          onSubmit={login}
        >
          <label
            className="text-[#515839] font-bold self-start mb-[4px] "
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="border-[1px] border-black rounded-[16px] p-2  bg-[#FEFFF9] mb-[24px] h-[50px] w-full focus:bg-[#f2f5e1] hover:bg-[#f2f5e1] transition-all duration-[0.35s]"
            type="text"
            id="email"
            name="email"
            placeholder="Insira o email"
            value={usuarioLogin.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
          <label
            className="text-[#515839] font-bold self-start mb-[4px] "
            htmlFor="senha"
          >
            Senha
          </label>
          <input
            className="border-[1px] border-black rounded-[16px] p-2  bg-[#FEFFF9]  h-[50px] focus:bg-[#f2f5e1] hover:bg-[#f2f5e1] transition-all duration-[0.35s] "
            type="password"
            id="senha"
            name="senha"
            placeholder="Insira a senha"
            value={usuarioLogin.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          ></input>
          <button
            type="submit"
            className="border-[1px] border-[#515839] rounded-[16px] p-2  bg-[#C8D198] mt-[48px] h-[50px] font-medium text-white text-[20px] hover:scale-[1.01] transition-all duration-[0.5s] hover:bg-[#515839]"
          >
            Entrar
          </button>
        </form>
        <a className="mt-[16px] text-[#515839] font-medium text-[20px] hover:underline">
          Esqueci minha senha
        </a>
        <div className="flex gap-[4px] mt-20">
          <p className="font-normal text-[20px]">Não possui uma conta?</p>
          <Link
            to="/cadastro"
            className="font-semibold text-[20px] text-[#515839] hover:underline"
          >
            Registre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
