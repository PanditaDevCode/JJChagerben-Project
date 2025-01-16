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
        <header id="header" className="header shadow-BX1 bg-BGHeader bg-no-repeat bg-cover flex items-center min-h-[120vh] pt-[200px] pb-[200px] pl-0 pr-0 relative w-full sm:pt-1 sm:pb-10 ">
            <section className="menu fixed top-0 left-0 w-full h-[60px] z-10000 flex items-center justify-between pt-0 pb-0 pl-[20px] pr-[20px] sm:w-full sm:mb-0" id="menu">
                <div className="menu-background absolute inset-0 transition-all duration-300 bg-cover bg-center"></div>
                <a href="#about-me" className="logo text-white font-extrabold whitespace-nowrap z-10000 relative ml-[10px] hover:scale-[1.05] hover:text-[#131313]">
                    JJ Chagerben
                </a>
                <input type="checkbox" id="menu-toggle" className="menu-toggle hidden" />
                <label htmlFor="menu-toggle" className="menu-label z-10 relative">
                    <div className="menu-icon">
                        <span className="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] ml-auto mr-auto relative bg-white"></span>
                        <span className="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] ml-auto mr-auto relative bg-white"></span>
                        <span className="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] ml-auto mr-auto relative bg-white"></span>
                    </div>
                </label>
                <nav className="navbar absolute top-full left-[-88px] right-0 w-full hidden z-9999 p-0 m-0 sm:mt-0 sm:absolute sm:left-0 sm:w-full sm:bg-RGBA1 sm:backdrop-blur-[5px]">
                    <ul className="flex flex-col space-y-1 z-10000">
                        <li className="w-full">
                            <a href="#tradingview-chart" className="block w-full px-4 py-2 text-white hover:bg-gray-800" onClick={() => closeMenu()}>Gráfico</a>
                        </li>
                        <li className="w-full">
                            <a href="#about-me" className="block w-full px-4 py-2 text-white hover:bg-gray-800" onClick={() => closeMenu()}>Acerca de Mi</a>
                        </li>
                        <li className="w-full">
                            <a href="#lives" className="block w-full px-4 py-2 text-white hover:bg-gray-800" onClick={() => closeMenu()}>Directos</a>
                        </li>
                        <li className="w-full">
                            <a href="#work-with-me" className="block w-full px-4 py-2 text-white hover:bg-gray-800" onClick={() => closeMenu()}>Trabaja Conmigo</a>
                        </li>
                        <li className="w-full">
                            <a href="#redes" className="block w-full px-4 py-2 text-white hover:bg-gray-800" onClick={() => closeMenu()}>Redes Sociales</a>
                        </li>
                        <li className="w-full">
                            <a href="#merch" className="block w-full px-4 py-2 text-white hover:bg-gray-800" onClick={() => closeMenu()}>Merch</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <section className="time-container absolute z-10 sm:p-[10px] sm:align-center sm:flex sm:items-center sm:content-center sm:z-9999 ">
                <div className="time flex gap-[30px] justify-center ml-[50px] sm:items-center sm:content-center sm:text-center sm:grid sm:grid-cols-2 sm:ml-[-10em] sm:mt-[2em] ">
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

            <section className="header-content container sm:align-center sm:items-center ">
                <article className="header-txt text-center p-[0 150px] ml-[50px] sm:p-0 align-center sm:items-center sm:text-center sm:ml-[-25] sm:mt-[30em] ">
                    <h1 class="relative z-2 text-6xl/[55px] leading-[1] text-[#FFFFFF] mt-[200px] mb-[25px] sm:text-[50px] sm:p-[10px] sm:mr-[0.8em] ">
                        Bitcoin es <span class="text-slate-900 font-medium">SACARSE</span> la <span class="text-slate-900 font-medium">LOTERIA</span>
                        <br />en cámara <span class="text-slate-900 font-medium">Lenta.</span>
                    </h1>
                    <p class="relative z-2 sm:mr-[2em] p-[10px] ">
                        No importa el día ni el momento en que lo leas, BITCOIN siempre será barato sin importar en qué
                        precio esté.<br />
                        <strong>BITCOIN será lo que pondrá el PAN en tu MESA.</strong>
                    </p>
                    <div className="butons flex justify-center">
                        <a href="#precios" className="btn-1  bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px]">Mentoria Premium</a>
                    </div>
                </article>
            </section>
        </header>
    );
};

export default Header; 