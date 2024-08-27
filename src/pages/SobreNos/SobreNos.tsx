import React from 'react'
import './SobreNos.css'
import gustavo from '../../assets/Gustavo.png'
import ruth from '../../assets/Ruth.png'
import joao from '../../assets/Joao.png'
import julio from '../../assets/Julio.png'
import vinicius from '../../assets/Vinicius.png'
import caroline from '../../assets/Caroline.png'



function SobreNos() {
  return (
    <div className='h-full bg-[#fdfff6] p-14 mt-5' >
        <article className='flex justify-center '>
            <div className='flex flex-col border rounded-3xl p-20'>
                <h1 className=' flex font-bold text-[50px] text-[#515839] justify-center mb-5'>Sobre nós</h1>
                <p className='sobre'>Nosso Grupo 3 da Generation Brasil foi desafiado a criar uma solução inovadora com foco no Objetivo de Desenvolvimento Sustentável 2 (ODS-2), que visa erradicar a fome e promover uma agricultura sustentável. Em resposta a essa missão, nos dedicamos a desenvolver um marketplace inovador, que conecta diretamente os consumidores aos agricultores locais. Essa plataforma foi projetada para facilitar o acesso a alimentos frescos e de qualidade, ajudando a melhorar a distribuição de produtos em regiões acessíveis e contribuindo para a segurança alimentar.</p>
                <p className='sobre mt-5'>Além de proporcionar uma experiência de compra mais direta e eficiente, o projeto também tem como objetivo fortalecer a economia local, incentivando o consumo de alimentos cultivados por pequenos produtores. Ao longo desse processo, enfrentamos inúmeros desafios, desde a concepção da ideia até a implementação da solução, mas com muito trabalho em equipe, perseverança e criatividade, conseguimos transformar essa iniciativa em uma realidade concreta.</p>
                <p className='sobre mt-5'>Juntos, superamos os obstáculos e criamos uma ferramenta que pode ter um impacto real e positivo na comunidade e na sustentabilidade agrícola. É uma conquista que nos enche de orgulho e reforça a importância de trabalhar em prol de causas tão significativas.</p>
            </div>
            
        </article>

        <h1 className='flex align-center justify-center m-10 font-bold text-[50px] text-[#515839]'>Equipe</h1>

        <section className='grid grid-cols-7 gap-2 participantes'>
            <a href="https://www.linkedin.com/in/gustavo-r13/" target='_blank' className='editFoto'>
                <img src={gustavo} alt="" className='editImagem'/>
            </a>
            <a href="https://www.linkedin.com/in/ruth-rojas/" target='_blank' className='editFoto'>
                <img src={ruth} alt="" className='editImagem'  />
            </a>
            <a href="https://www.linkedin.com/in/jovesposito/" target='_blank' className='editFoto'>
                <img src={joao} alt="" className='editImagem' />
            </a>
            <a href="https://www.linkedin.com/in/juliohf/" target='_blank' className='editFoto'>
                <img src={julio} alt="" className='editImagem' />
            </a>
            <a href="https://www.linkedin.com/in/vinícius-bueno090101/" target='_blank' className='editFoto'>
                <img src={vinicius} alt="" className='editImagem' />
            </a>
            <a href="https://www.linkedin.com/in/vinícius-bueno090101/" target='_blank' className='editFoto'>
                <img src={caroline} alt="" className='editImagem' />
            </a>
        </section>
    </div>
  )
}

export default SobreNos