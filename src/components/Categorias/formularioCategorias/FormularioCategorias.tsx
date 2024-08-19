import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import Categoria from '../../../models/Categoria';

function FormularioCategoria() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
      });

    async function buscarCateogoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        });
    }

        function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
            setCategoria({
              ...categoria,
              [e.target.name]: e.target.value
            });
          }

          function retornar() {
            navigate('/postagens');
          }
        
          async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault();
        
            console.log({ categoria });
        
            if (id != undefined) {
              try {
                await atualizar(`/postagens`, categoria, setCategoria, {
                  headers: {
                    Authorization: token,
                  },
                });
                alert('Postagem atualizada com sucesso');
                retornar();
              } catch (error: any) {
                if (error.toString().includes('403')) {
                  alert('O token expirou, favor logar novamente')
                  handleLogout()
                } else {
                  alert('Erro ao atualizar a Postagem');
                }
              }
            } else {
              try {
                await cadastrar(`/postagens`, categoria, setCategoria, {
                  headers: {
                    Authorization: token,
                  },
                });
        
                alert('Postagem cadastrada com sucesso');
                retornar();
              } catch (error: any) {
                if (error.toString().includes('403')) {
                  alert('O token expirou, favor logar novamente')
                  handleLogout()
                } else {
                  alert('Erro ao cadastrar a Postagem');
                }
              }
            }
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>
  
        <form onSubmit={gerarNovaCategoria} className="flex flex-col w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Titulo da postagem</label>
            <input
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Nome"
              name="nome"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Texto da postagem</label>
            <input
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Texto"
              name="texto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Tema da postagem</p>
            <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCateogoriaPorId(e.currentTarget.value)}>
              <option value="" selected disabled>Selecione um tema</option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id} >{categoria.descricao}</option>
                </>
              ))}
            </select>
          </div>
          <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
            {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
  )
}

export default FormularioCategoria