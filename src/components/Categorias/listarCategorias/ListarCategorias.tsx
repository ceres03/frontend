import { useContext, useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardCategorias/CardCategorias';
import Categoria from '../../../models/Categoria';

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado',);
            navigate('/');
        }
    }, [token]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);
    return (
        <>
            {categorias.length === 0 && (
                <ThreeDots
                    visible={true}
                    height="200"
                    width="200"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ justifyContent: 'center' }}
                    wrapperClass=""
                />
            )}
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {categorias.map((categoria) => (
                    <CardCategorias key={categoria.id} categoria={categoria} />
                ))}
            </div>
        </>
    );
}

export default ListarCategorias;