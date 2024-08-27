import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  quantidadeNoCarrinho: number;
  descricao: string;
  imagem: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
