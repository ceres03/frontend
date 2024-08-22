import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import "../cardCategorias/cardCategoria.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {

  const { usuario } = useContext(AuthContext);
  const email = usuario.email;
  const admin: boolean = email == "root@root.com";


  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between mb-8">
      <img src="/src/assets/oranges.png" alt="" className="w-full" />
      <h2 className="py-6 px-6 text-[#515839] font-bold text-2xl">
        {categoria.nome}
      </h2>
      <p className="px-6 pb-8 text-base bg-white h-full">
        {categoria.descricao}
      </p>
      {admin && (
        <div className="button-container">
          <Link to={`/editarCategoria/${categoria.id}`}>
            <button className="btn btn-2 btn-sep icon-cart">Editar</button>
          </Link>
          <Link to={`/deletarCategoria/${categoria.id}`}>
            <button className="btn btn-3 btn-sep icon-trash">Deletar</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CardCategorias;
