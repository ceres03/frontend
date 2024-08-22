
import logo from '../../assets/oranges.png'
import { Bag } from '@phosphor-icons/react'

function TelaProduto() {
    return (
        <div className='flex w-auto h-[100vh] m-auto p-[5%] '>
            <div className='flex m-5 rounded-[50px]'>
                <img src={logo} alt="foto do produto" className='rounded-[30px]' />
            </div>

            <section className='flex flex-col w-[40%] m-5 p-5 border rounded-[30px]'>
                <div >
                    <h1 className='align-start text-[32px]'>Banana Prata Hortmix 800g</h1>
                    <h6>5.0</h6>
                </div>

                <div className='text-[30px] mt-2 font-bold text-[#515839]'>R$ 8,90</div>

                <div className='flex float-start bg-[#E5EACB8F] mt-8 p-2 rounded-xl'>
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGCPe7QrmAAWQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719861059468?e=1729728000&v=beta&t=1gMFu_AmfrBEZ_wXoDKB_DaAqFy53RdQhAQBMhSvYqo" alt="" className='flex rounded-[50%] bg-slate-500 size-10 ' />
                    <div>
                        <h6 className='pl-2 text-[10px] text-[#515839]'>vendido por</h6>
                        <h3 className='pl-2 font-bold text-[#515839]'>Nome do vendedor</h3>
                    </div>
                </div>
                <div className='mt-8 border rounded-xl p-3'>
                    <h3>Descrição</h3>
                    <p className='pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi dicta ipsam, modi perspiciatis placeat atque quo doloremque labore similique illum numquam quod incidunt perferendis asperiores quasi commodi sit veritatis itaque?</p>
                </div>

                <div className='flex border mt-8 p-3 justify-between rounded-xl'>
                    <p>Quantidade Disponivel</p>
                    <p className='text-[#515839] font-medium'>+50 unidades disponiveis</p>
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