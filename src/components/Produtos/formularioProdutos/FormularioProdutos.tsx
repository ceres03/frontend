import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';

function FormularioProdutos() {
    
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0,
    descricao: '',
    imagem: '',
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert('Produto atualizado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Produto');
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        alert('Produto cadastrado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrar o Produto');
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className="container flex flex-col mx-auto items-center pt-[5%] h-[100vh]">
      <h1 className="text-4xl text-center my-8 font-semibold text-[#515839]">{id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}</h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="produto" className='text-[#515839] font-medium'>Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className='text-[#515839] font-medium'>Descrição do produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className='text-[#515839] font-medium'>Preço do produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Preço"
            name="preco"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantidade" className='text-[#515839] font-medium'>Quantidade do produto</label>
          <input
            value={produto.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Quantidade"
            name="quantidade"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="imagem" className='text-[#515839] font-medium'>Imagem do produto</label>
          <input
            value={produto.imagem}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Imagem do produto"
            name="imagem"
            required
            className="border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className='text-[#515839] font-medium'>Categoria do produto</p>
          <select name="categoria" id="categoria" className='border-[1px] border-[#515839] rounded-[16px] p-2 focus:bg-[#fbfdf1] focus:outline-[#515839] transition-all duration-[0.15s] h-[50px]' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded-[15px] disabled:bg-[#E5EACB] bg-[#C8D198] hover:bg-[#7C8758] text-white font-bold w-1/3 mx-auto block py-2 transition-all duration-[0.15s]'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioProdutos;