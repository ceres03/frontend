import { Link } from 'react-router-dom';
import Produto from '../../../models/Produto';
import "../cardProdutos/CardProdutos.css"
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Handbag } from '@phosphor-icons/react';

function CardProdutos(produto: Produto) {

    const { usuario } = useContext(AuthContext);
    const email = usuario.email;
    const admin: boolean = email == "root@root.com";
  
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between mb-8 relative hover:scale-[1.01] transition-all duration-[.5s]">
            <Link to={`/telaProduto/${produto.id}`}>
                <div className='flex-shrink-0 h-auto relative'>
                    <img
                        src={produto.imagem}
                        className='w-full h-full object-cover'
                        alt={produto.nome}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-40 rounded-t-lg">
                        <Handbag size={42} className="text-white" />
                    </div>
                </div>
            </Link>
            <div className='flex-1 p-4 flex flex-col justify-between'>
                <div>
                    <h2 className='text-2xl font-bold mb-2'>{produto.nome}</h2>
                    <p className='text-lg font-semibold mb-2'>{produto.descricao}</p>
                    <p className='text-lg font-semibold mb-4'>{produto.preco}</p>
                </div>
            </div>
            {admin && (
                <div className="button-container">
                    <Link to={`/editarProdutos/${produto.id}`}>
                        <button className="btn btn-2 btn-sep icon-cart">Editar</button>
                    </Link>
                    <Link to={`/deletarProdutos/${produto.id}`}>
                        <button className="btn btn-3 btn-sep icon-trash">Deletar</button>
                    </Link>
                </div>
            )}
        </div>

    );
}

export default CardProdutos;