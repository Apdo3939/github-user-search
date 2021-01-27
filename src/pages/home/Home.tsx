import React from 'react';
import './styles.scss';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                
                <h1 className="home-title">Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h1>
                
                <div className="home-subtitle pt-24">
                    <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
                    <p>Favor observar as instruções passadas no capítulo sobre a elaboração<br /> deste projeto.</p>
                    <p>
                        Este design foi adaptado a partir de Ant Design System for Figma, de<br /> Mateusz Wierzbicki: antforfigma@gmail.com
                    </p>
                </div>

                <button className="home-button">
                    <h5 className="home-button-text">Começar</h5>
                </button>

            </div>
        </div>
    );
}

export default Home;