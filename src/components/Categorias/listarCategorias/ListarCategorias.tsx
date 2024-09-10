import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import CardCategorias from "../cardCategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { toastAlerta } from "../../../utils/toastAlerta";
import LoadingPage from "../../LoadingPage.tsx/LoadingPage";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
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
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 ? (
        <LoadingPage />
      ) : (
        <div className="container mx-auto my-4 mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListarCategorias;
