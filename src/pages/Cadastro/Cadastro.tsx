import { useNavigate } from 'react-router-dom'
import './Cadastro.css'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import logoOfc from '../../assets/logoOfc.png'
import { Bag, CheckCircle, Circle, Storefront } from '@phosphor-icons/react'
function Cadastro() {

    let navigate = useNavigate()

    const [tipoUsuario, setTipoUsuario] = useState("");


    const formRef = useRef<HTMLFormElement>(null);

    const handleExternalSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    }

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
            <form className='mt-14  grid grid-flow-col ' ref={formRef} onSubmit={cadastrarNovoUsuario}>
                <div className='flex flex-col pr-10'>
                    <label className='text-[#515839] font-bold' htmlFor='nome'>Nome</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2"
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Insira o Nome"
                        value={usuario.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    >
                    </input>
                    <label className='text-[#515839] font-bold' htmlFor='telefone'>Telefone</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2"
                        type="text"
                        id="telefone"
                        name="telefone"
                        placeholder="Insira o telefone"
                        value={usuario.telefone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    >
                    </input>
                    <label className='text-[#515839] font-bold' htmlFor='senha'>Senha</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2 "
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Insira a senha"
                        value={usuario.senha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    >
                    </input>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[#515839] font-bold' htmlFor='email'>Email</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Insira o email"
                        value={usuario.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    >
                    </input>
                    <label className='text-[#515839] font-bold' htmlFor='foto'>Foto (Link)</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2"
                        type="text"
                        id="foto"
                        name="foto"
                        placeholder="Foto"
                        value={usuario.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    >
                    </input>
                    <label className='text-[#515839] font-bold' htmlFor='confirmarSenha'>Confirmar Senha</label>
                    <input className="border-[1px] border-black rounded-[15px] p-2   bg-[#fefff9] hover:bg-[#f2f5e1] focus:bg-[#f2f5e1] mb-8 mt-2"
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        value={confirmaSenha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                    >
                    </input>
                </div>
            </form>
            <div className='flex justify-between '>
                <button className='border-[1px] border-black rounded-[15px] w-[10%] h-11 bg-[#E5EACB] text-[#515839] font-medium' onClick={back}>Cancelar</button>
                <button className='border-[1px] border-black rounded-[15px] w-[10%] h-11 bg-[#515839] text-[white] font-medium' type='submit' onClick={handleExternalSubmit}>Cadastrar</button>
            </div>
        </div>
    )
}
export default Cadastro