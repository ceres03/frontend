import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../services/Service'
import { AuthContext } from '../../../contexts/AuthContext'

function DeletarProdutos() {
    const [produto, setProduto] = useState<Produto>({} as Produto)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

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
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/produtos")
    }

    async function deletarProdutos() {
        try {
            await deletar(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Produto apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Produto')
        }

        retornar()
    }

    return (
        <div className="container flex flex-col mx-auto items-center pt-[5%] mt-32 pb-8">
            <h1 className="text-4xl text-center my-8 font-semibold text-[#515839]">
                Deletar Produto
            </h1>

            <p className="text-center font-semibold mb-4 text-[#515839]">
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>



            <div className="border-[1px] border-[#909b6e] rounded-[16px] overflow-hidden w-1/2">
                <header className="py-4 px-6 bg-[#80885f] text-white font-bold text-2xl text-center">
                    {produto.nome}
                </header>
                <p className="p-8 text-3xl bg-[#fbfdf1] h-full text-center text-[#515839]">
                    {produto.descricao}
                </p>
                <div className="flex">
                    <button
                        className="w-1/2 text-white bg-red-400 hover:bg-red-600 py-4 font-bold"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-1/2 text-white bg-[#7C8758] hover:bg-[#515839] py-4 font-bold"
                        onClick={deletarProdutos}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProdutos
