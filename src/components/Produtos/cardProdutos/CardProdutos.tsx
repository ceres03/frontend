import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';


function CardProdutos(post: Produto) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between w-80'>
            <div>
                <div className="flex flex-col items-center bg-gray-100">
                    <img
                        src={post.imagem}
                        className='w-full h-48 object-cover rounded'
                        alt={post.nome}
                    />
                    <h2 className='text-2xl font-bold mt-2'>{post.nome}</h2>
                </div>

                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
                    <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
                </div>
                <div className="flex">
                    <Link to={`/editarProdutos/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarProdutos/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default CardProdutos;
