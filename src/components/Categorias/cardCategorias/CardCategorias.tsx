import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between mb-8">
      <img src="/src/assets/oranges.png" alt="" className="w-full" />
      <h2 className="py-6 px-6 text-[#515839] font-bold text-2xl">
        {categoria.nome}
      </h2>
      <p className="px-6 pb-8 text-base bg-white h-full">
        {categoria.descricao}
      </p>
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-[#859B48]  hover:bg-[#596b27] flex items-center justify-center py-2"
        >
          <button className="no-underline">Editar</button>
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
