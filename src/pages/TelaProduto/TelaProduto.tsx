
import { useContext, useEffect, useState } from 'react'
import { Bag } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar } from '../../services/Service'
import Produto from '../../models/Produto'
import { useNavigate, useParams } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'

function TelaProduto() {

    const [produto, setProduto] = useState<Produto | null>(null)
    let navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    function retornar() {
        navigate("/produtos")
    }

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    if (!produto) {
        return <div className="flex justify-center items-center h-screen w-full mt-20">
            <ThreeDots
                visible={true}
                height="200"
                width="200"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ justifyContent: "center" }}
                wrapperClass=""
            />
        </div>
    }

    return (
        <div className='flex w-auto h-[100vh] m-auto p-[5%] '>
            <div className='flex m-5 rounded-[50px]'>
                <img src={produto.imagem} alt="foto do produto" className='rounded-[30px]' />
            </div>

            <section className='flex flex-col w-[40%] m-5 p-5 border rounded-[30px]'>
                <div >
                    <h1 className='align-start text-[32px]'>{produto.nome}</h1>
                    <h6>5.0</h6>
                </div>

                <div className='text-[30px] mt-2 font-bold text-[#515839]'>R${produto.preco}</div>

                <div className='flex float-start bg-[#E5EACB8F] mt-8 p-2 rounded-xl'>
                    <img src={produto.usuario.foto} alt="Foto Vendedor" className='flex rounded-[50%] bg-slate-500 size-10 ' />
                    <div>
                        <h6 className='pl-2 text-[10px] text-[#515839]'>vendido por</h6>
                        <h3 className='pl-2 font-bold text-[#515839]'>{produto.usuario.nome}</h3>
                    </div>
                </div>
                <div className='mt-8 border rounded-xl p-3'>
                    <h3>Descrição</h3>
                    <p className='pt-2'>{produto.descricao}</p>
                </div>

                <div className='flex border mt-8 p-3 justify-between rounded-xl'>
                    <p>Quantidade Disponivel</p>
                    <p className='text-[#515839] font-medium'>Unidades disponíveis: {produto.quantidade}</p>
                </div>

                <a href="#" className='flex mt-16'>
                    <h1 className='flex rounded-xl w-full h-14 justify-center items-center bg-[#515839] text-white gap-2 font-bold'>Comprar agora <Bag size={32} /></h1>
                </a>
                <a href="#">
                    <h1 className='mt-4 flex rounded-xl w-full h-14 justify-center items-center bg-[#E5EACB] text-[#515839] gap-2 font-bold'>Adicionar ao carrinho <Bag size={32} /></h1>
                </a>

            </section>


        </div>
    )
}

export default TelaProduto