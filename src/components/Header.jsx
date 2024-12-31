import React from 'react';

const CountdownCircle = ({ id, label }) => (
    <div className="circle" style={{ '--clr': '#969696' }}>
        <div className={`dots ${id}_dot`}></div>
        <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id={id}></circle>
        </svg>
        <div id={id} className="clock">00<br /><span>{label}</span></div>
    </div>
);

const Header = () => {
    return (
        <header id="header" className="header">
            {/* Menu Nav */}
            <section className="menu" id="menu">
                <a href="#about-me" className="logo">JJ Chagerben</a>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-label">
                    <div className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <nav className="navbar">
                    <ul>
                        <li><a href="#tradingview-chart">Grafico</a></li>
                        <li><a href="#about-me">Acerca de Mi</a></li>
                        <li><a href="#lives">Directos</a></li>
                        <li><a href="#work-with-me">Trabaja Conmigo</a></li>
                        <li><a href="#redes">Redes Sociales</a></li>
                        <li><a href="#merch">Merch</a></li>
                    </ul>
                </nav>
            </section>

            {/* Countdown */}
            <section className="time-container">
                <div className="time">
                    <CountdownCircle id="days" label="Días" />
                    <CountdownCircle id="hours" label="Horas" />
                    <CountdownCircle id="minutes" label="Minutos" />
                    <CountdownCircle id="seconds" label="Segundos" />
                </div>
            </section>

            {/* Header Content */}
            <section className="header-content container">
                <article className="header-txt">
                    <h1>
                        Bitcoin es <span>SACARSE</span> la <span>LOTERIA</span>
                        <br />en cámara <span>Lenta.</span>
                    </h1>
                    <p>
                        No importa el día ni el momento en que lo leas, BITCOIN siempre será barato sin importar en qué
                        precio esté.<br />
                        <strong>BITCOIN será lo que pondrá el PAN en tu MESA.</strong>
                    </p>
                    <div className="butons">
                        <a href="#precios" className="btn-1">Mentoria Premium</a>
                    </div>
                </article>
            </section>
        </header>
    );
};

export default Header;