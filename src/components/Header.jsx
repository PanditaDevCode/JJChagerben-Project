// Header.jsx
import React, { useEffect, useState, useRef } from 'react';
import { startCountdown } from '../utils/CountdownLogic';

const CountdownCircle = ({ id, label, refCircle, refDot, value }) => (
    <div className="circle" style={{ '--clr': '#969696' }}>
        <div ref={refDot} className={`dots ${id}_dot`}></div>
        <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle ref={refCircle} cx="70" cy="70" r="70" id={id}></circle>
        </svg>
        <div id={id} className="clock">
            {value}<br /><span>{label}</span>
        </div>
    </div>
);

const Header = () => {
    const [timeData, setTimeData] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    const daysRef = useRef(null);
    const hoursRef = useRef(null);
    const minutesRef = useRef(null);
    const secondsRef = useRef(null);
    const dayDotRef = useRef(null);
    const hourDotRef = useRef(null);
    const minDotRef = useRef(null);
    const secDotRef = useRef(null);

    useEffect(() => {
        const endDate = '04/17/2028 00:00:00'; 
        startCountdown(
            endDate, 
            setTimeData, 
            {
                daysRef,
                hoursRef,
                minutesRef,
                secondsRef,
                dayDotRef,
                hourDotRef,
                minDotRef,
                secDotRef
            }
        );
    }, []);

    return (
        <header id="header" className="header">
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

            <section className="time-container">
                <div className="time">
                    <CountdownCircle 
                        id="days" 
                        label="Días" 
                        refCircle={daysRef} 
                        refDot={dayDotRef} 
                        value={timeData.days} 
                    />
                    <CountdownCircle 
                        id="hours" 
                        label="Horas" 
                        refCircle={hoursRef} 
                        refDot={hourDotRef} 
                        value={timeData.hours} 
                    />
                    <CountdownCircle 
                        id="minutes" 
                        label="Minutos" 
                        refCircle={minutesRef} 
                        refDot={minDotRef} 
                        value={timeData.minutes} 
                    />
                    <CountdownCircle 
                        id="seconds" 
                        label="Segundos" 
                        refCircle={secondsRef} 
                        refDot={secDotRef} 
                        value={timeData.seconds} 
                    />
                </div>
            </section>

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
