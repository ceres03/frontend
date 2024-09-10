import { useContext } from "react";
import orangespng from "../../../assets/oranges.png";
import { AuthContext } from "../../../contexts/AuthContext";

function cardCategoriaSkeleton() {
  const { usuario } = useContext(AuthContext);
  const email = usuario.email;
  const admin: boolean = email == "root@root.com";

  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between mb-8">
      <img
        src={orangespng}
        alt="Categoria exemplo"
        className="w-full h-[210px] object-cover"
      />
      <h2 className="py-6 px-6 text-[#515839] font-bold text-2xl">Nome</h2>
      <p className="px-6 pb-8 text-base bg-white h-full">Descricao</p>
      {admin && (
        <div className="button-container">
          <a href="#">
            <button className="btn btn-2 btn-sep icon-cart">Editar</button>
          </a>
          <a href="#">
            <button className="btn btn-3 btn-sep icon-trash">Deletar</button>
          </a>
        </div>
      )}
    </div>
  );
}
export default cardCategoriaSkeleton;
