import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../services/Service"
import Categoria from "../../../models/Categoria"
import { toastAlerta } from "../../../utils/toastAlerta"

function DeletarCategorias() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'erro')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className='container flex flex-col mx-auto items-center pt-[1%] mt-32 pb-8'>
            <h1 className='text-4xl text-center my-8 text-[#515839]'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4 text-[#515839]'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border-[1px] border-[#909b6e] rounded-[16px] overflow-hidden w-1/2'>
                <header className='py-4 px-6 bg-[#80885f] text-white font-bold text-2xl text-center'>{categoria.nome}</header>
                <p className='p-8 text-3xl bg-[#fbfdf1] h-full text-center text-[#515839]'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='w-1/2 text-white bg-red-400 hover:bg-red-600 py-4 font-bold' onClick={retornar}>Não</button>
                    <button className='w-1/2 text-white bg-[#7C8758] hover:bg-[#515839] py-4 font-bold' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategorias