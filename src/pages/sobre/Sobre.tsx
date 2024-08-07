import React from 'react';
import './Sobre.css';

function Sobre() {
    return (
        <div className="sobre-nos">
            <h1>Sobre nós</h1>
            <p>
            Um aplicativo voltado para distribuição e aumento de visibilidade de produtores locais e produtos para agricultores. Preços descentralizados do mercado padrão (idealmente menores) voltados para a população vulnerável das cidades.
            </p>
            <br></br>
            <h1>Noss objetivo</h1>
            <p>
            Estimular a agricultura local, o estímulo para agriculturas orgânicas, evitar o desperdício de alimentos e garantir a qualidade dos mercados de commodities de alimentos.  
            </p>
            <h2>Informações de Contato</h2>
            <ul>
                <li>Email: ceres@gmail.com</li>
                <li>
                    GitHub: <a href="https://github.com/ceres03/docs" target="_blank" rel="noopener noreferrer">https://github.com/ceres03/docs</a>
                </li>
            </ul>
        </div>
    );
}

export default Sobre;