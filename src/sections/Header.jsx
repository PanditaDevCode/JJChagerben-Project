import React, { useEffect, useState, useRef } from "react";
import { startCountdown } from "../utils/CountdownLogic";

const CountdownCircle = ({ id, label, refCircle, refDot, value }) => (
  <div className="circle" style={{ "--clr": "#969696" }}>
    <div ref={refDot} className={`dots ${id}_dot`}></div>
    <svg>
      <circle cx="70" cy="70" r="70"></circle>
      <circle ref={refCircle} cx="70" cy="70" r="70" id={id}></circle>
    </svg>
    <div id={id} className="clock">
      {value}
      <br />
      <span>{label}</span>
    </div>
  </div>
);

const Header = () => {
  const [timeData, setTimeData] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const closeMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
      menuToggle.checked = false;
    }
  };

  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const secondsRef = useRef(null);
  const dayDotRef = useRef(null);
  const hourDotRef = useRef(null);
  const minDotRef = useRef(null);
  const secDotRef = useRef(null);

  useEffect(() => {
    const endDate = "04/17/2028 00:00:00";
    startCountdown(endDate, setTimeData, {
      daysRef,
      hoursRef,
      minutesRef,
      secondsRef,
      dayDotRef,
      hourDotRef,
      minDotRef,
      secDotRef,
    });
  }, []);

  return (
    <header
      id="header"
      className="header flex items-center min-h-[120vh] pt-[200px] pb-[200px] pl-0 pr-0 relative w-full
                                        xxs:shadow-BX1 xxs:bg-BGHeader xxs:bg-no-repeat xxs:min-h-0 xxs:pb-[200px] xxs:bg-cover
                                        md:pt-1 md:pb-10 
                                        mx:pb-[10em]"
    >
      <section
        className="time-container absolute z-10
                                xxs:p-[10] xxs:text-center xxs:flex xxs:items-center xxs:content-center xxs:z-9999 
                                xx:ml-9
                                xs:ml-[3.1em] xs:mt-[2em] s:ml-[7em] 
                                sx:ml-[6em] sx:mt-[6em]
                                s:mt-[10em]
                                sm:ml-[10em]
                                md:ml-[1em] md:mt-[8em]     
                                x:ml-[3.5em] x:mt-[12em]
                                mx:ml-[5.5em] mx:mt-[10em]
                                lg:ml-[8.8em] lg:mt-[14em]
                                m:ml-[15em]
                                xl:ml-[19em]
                                2xl:ml-[26%]"
      >
        <div
          className="time flex gap-[30px] justify-center ml-[50px]
                                xxs:items-center xxs:content-center xxs:text-center xxs:grid xxs:grid-cols-2 xxs:ml-[-19em] xxs:mt-[-20rem] 
                                md:flex md:mt-[-5em] md:ml-[-17em]"
        >
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

      <section
        className="header-content container
                                xxs:content-center xxs:items-center"
      >
        <article
          className="header-txt text-center p-[0 150px] ml-[50px]
                                    xxs:p-0 xxs:content-center xxs:items-center xxs:text-center xxs:ml-[-10px] xxs:mr-[10px] xxs:mt-[100px] 
                                    md:mt-[8em] "
        >
          <h1
            className="relative z-2 text-6xl/[55px] leading-[1] text-[#FFFFFF] mt-[200px] mb-[25px] 
                                xxs:text-[50px] xxs:pt-[10px] xxs:ml-[30px]"
          >
            Bitcoin es{" "}
            <span className="text-slate-900 font-medium">SACARSE</span> la{" "}
            <span className="text-slate-900 font-medium">LOTERIA</span>
            <br />
            en cámara <span className="text-slate-900 font-medium">Lenta.</span>
          </h1>
          <p className="relative z-2 p-[10px] xxs:ml-[30px] xxs:p-[10px]">
            No importa el día ni el momento en que lo leas, BITCOIN siempre será
            barato sin importar en qué precio esté.
            <br />
            <strong>BITCOIN será lo que pondrá el PAN en tu MESA.</strong>
          </p>
          <div className="butons flex justify-center">
            <a
              href="#precios"
              className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px] xxs:mr-[-10px]"
            >
              Mentoria Premium
            </a>
          </div>
        </article>
      </section>
    </header>
  );
};

export default Header;