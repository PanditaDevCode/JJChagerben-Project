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
        <header id="header" className="header  shadow-BX1 bg-BGHeader bg-no-repeat bg-cover flex items-center min-h-[120vh] p-[200px 0] relative w-full">
            <section className="menu  fixed top-0 left-0 w-full h-[60px] z-50 flex items-center justify-between px-[20px] transition-all duration-300" id="menu">
                <div className="menu-background absolute inset-0 transition-all duration-300"></div>
                <a href="#about-me" className="logo text-white font-extrabold whitespace-nowrap z-10 relative ml-[10px]">JJ Chagerben</a>
                <input type="checkbox" id="menu-toggle" className="menu-toggle hidden" />
                <label htmlFor="menu-toggle" className="menu-label z-10 relative">
                    <div className="menu-icon block cursor-pointer">
                        <span class="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] bg-white"></span>
                        <span class="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] bg-white"></span>
                        <span class="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] bg-white"></span>
                    </div>
                </label>
                <nav className="navbar absolute top-full left-[-88px] right-0 w-full hidden z-10">
                    <ul className='flex space-x-1'>
                        <li><a href="#tradingview-chart" class="text-white">Grafico</a></li>
                        <li><a href="#about-me" class="text-white">Acerca de Mi</a></li>
                        <li><a href="#lives" class="text-white">Directos</a></li>
                        <li><a href="#work-with-me" class="text-white">Trabaja Conmigo</a></li>
                        <li><a href="#redes" class="text-white">Redes Sociales</a></li>
                        <li><a href="#merch" class="text-white">Merch</a></li>
                    </ul>
                </nav>
            </section>

            <section className="time-container absolute z-2">
                <div className="time flex gap-[30px] justify-center ml-[50px]">
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
                <article className="header-txt text-center p-[0 150px] ml-[50px]">
                    <h1 class="relative z-2 text-6xl/[55px] leading-[1] text-[#FFFFFF] mt-[200px] mb-[25px]">
                        Bitcoin es <span class="text-slate-900 font-medium">SACARSE</span> la <span class="text-slate-900 font-medium">LOTERIA</span>
                        <br />en cámara <span class="text-slate-900 font-medium">Lenta.</span>
                    </h1>
                    <p class="relative z-2">
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