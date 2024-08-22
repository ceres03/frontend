import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import "../cardProdutos/CardProdutos.css"


function CardProdutos(post: Produto) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between mb-8">
            <div className='flex-shrink-0 h-1,5/3'>
                <img
                    src={post.imagem}
                    className='w-full h-full object-cover'
                    alt={post.nome}
                />
            </div>
            <div className='flex-1 p-4 flex flex-col justify-between'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>{post.nome}</h2>
                    <p className='text-lg font-semibold mb-2'>{post.descricao}</p>
                    <p className='text-lg font-semibold mb-4'>{post.preco}</p>
                </div>
                <div></div>
            </div>
            <div className="button-container">
                <Link to={`/editarProdutos/${post.id}`}>
                    <button className="btn btn-2 btn-sep icon-cart">Editar</button>
                </Link>
                <Link to={`/deletarProdutos/${post.id}`}>
                    <button className="btn btn-3 btn-sep icon-trash">Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos;
