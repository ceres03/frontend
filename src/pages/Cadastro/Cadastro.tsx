import { useNavigate } from 'react-router-dom'
import './Cadastro.css'
import { ChangeEvent, useEffect, useState } from 'react'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import logoOfc from '../../assets/logoOfc.png'
import { Bag, CheckCircle, Circle, Storefront, Textbox } from '@phosphor-icons/react'
function Cadastro() {

    let navigate = useNavigate()

    const [tipoUsuario, setTipoUsuario] = useState("");

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        foto: ''
    })

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            back()
        }
    }, [usuarioResposta])

    function back() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
                alert('Usuário cadastrado com sucesso')

            } catch (error) {
                alert('Erro ao cadastrar o Usuário')
            }

        } else {
            alert('Dados inconsistentes. Verifique as informações de cadastro.')
            setUsuario({ ...usuario, senha: "" })
            setConfirmaSenha("")
        }
    }

    return (
        <div className='flex flex-col px-64'>
            <div className='flex justify-center mt-20'>
                <img src={logoOfc} className='w-[100px]' />
            </div>
            <div className='mt-20 w-[75%]'>
                <p className='text-[#515839] font-bold '>Qual seu objetivo no Ceres?</p>
                <div className='w-[60%] flex justify-between mt-4'>
                    <button className={`border-[1px] border-black rounded-[15px]  h-14 w-[45%] flex justify-evenly items-center ${tipoUsuario === "vendedor" ? "bg-[#E5EACB]" : "bg-[white]"}`} onClick={() => { setTipoUsuario("vendedor") }}>
                        {tipoUsuario === "vendedor" ? <CheckCircle /> : <Circle />}
                        <p>Quero vender</p>
                        <Storefront size={32} />
                    </button>
                    <button className={`border-[1px] border-black rounded-[15px]  h-14 w-[45%] flex justify-evenly items-center ${tipoUsuario === "comprador" ? "bg-[#E5EACB]" : "bg-white"}`} onClick={() => { setTipoUsuario("comprador") }}>
                        {tipoUsuario === "comprador" ? <CheckCircle /> : <Circle />}
                        <p>Quero comprar</p>
                        <Bag size={32} />
                    </button>
                </div>
            </div>
            <form className='mt-14  grid grid-flow-col '>
                <div className='flex flex-col pr-10'>
                    <label className='text-[#515839] font-bold'>Nome</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2" >
                    </input>
                    <label className='text-[#515839] font-bold'>Telefone</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2" >
                    </input>
                    <label className='text-[#515839] font-bold' >Senha</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2 " type='password'>
                    </input>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[#515839] font-bold'>Email</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2" >
                    </input>
                    <label className='text-[#515839] font-bold'>Foto (Link)</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2" >
                    </input>
                    <label className='text-[#515839] font-bold'>Confirmar Senha</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2" type='password'>
                    </input>
                </div>
            </form>
            <div className='flex justify-between '>
                <button className='border-[1px] border-black rounded-[15px] w-[10%] h-11 bg-[#E5EACB] text-[#515839] font-medium'>Cancelar</button>
                <button className='border-[1px] border-black rounded-[15px] w-[10%] h-11 bg-[#515839] text-[white] font-medium'>Cadastrar</button>
            </div>
        </div>
    )
}
export default Cadastro