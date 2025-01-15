import React from "react";
import WorkWithMeImg from '../assets/images/workwithme.webp';

const WorkWithMeItems = ({ ImageSrc, TitleH1, TitleH2, SpanH1, Link }) => {
    return (
        <section className="work-with-me container py-[200px] max-w-full flex items-center flex-col">
            <div id="work-with-me" className="flex w-full">
                <div className="work-with-me-img flex-basis-[45%] ml-[50px]">
                    <img
                        src={ImageSrc}
                        alt="Imagen que representa trabajar conmigo"
                        className="w-[550px] h-[280px] rounded-[20px] shadow-[0_0_30px_rgba(190,190,190,0.8),0_0_40px_rgba(131,131,131,0.6),0_0_50px_rgba(102,102,102,0.4),0_0_60px_rgba(94,94,94,0.4)] animate-[border-img_1.5s_infinite_alternate]"
                    />
                </div>
                <div className="work-with-me-txt flex-basis-[50%] text-[18px] ">
                    <h1>
                        <span>{TitleH1}</span>
                    </h1>
                    <h2 className="text-[40px] text-[#fdfeff] leading-[1.4]">
                        {TitleH2} <span>{SpanH1}</span>
                    </h2>
                    <ul>
                        <li className="text-[#fdfeff] text-shadow-[0_0_8px_rgba(190,190,190,0.8),0_0_12px_rgba(131,131,131,0.6),0_0_17px_rgba(255,255,255,0.4),0_0_22px_rgba(94,94,94,0.4)]">
                            - Estar pendiente de los <span>Directos</span> en mis{" "}
                            <a href="#redes">
                                <span>Redes Sociales.</span>
                            </a>
                        </li>
                        <li className="text-[#fdfeff] text-shadow-[0_0_8px_rgba(190,190,190,0.8),0_0_12px_rgba(131,131,131,0.6),0_0_17px_rgba(255,255,255,0.4),0_0_22px_rgba(94,94,94,0.4)]">
                            - Reglas para el <span>Trabajo</span> en el{" "}
                            <a href={Link} target="_blank" rel="noopener noreferrer">
                                <span>Grupo de Editores.</span>
                            </a>
                        </li>
                        <li className="text-[#fdfeff] text-shadow-[0_0_8px_rgba(190,190,190,0.8),0_0_12px_rgba(131,131,131,0.6),0_0_17px_rgba(255,255,255,0.4),0_0_22px_rgba(94,94,94,0.4)]">
                            - Tener conocimientos en <span>Programas de Edición</span> como{" "}
                            <span>CapCut</span> u otros <span>Editores.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <a
                href={Link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-1 ml-[15em] mt-[-4em] bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-10 font-extrabold rounded-[5px] inline-block transition-transform duration-300"
            >
                Grupo de Editores
            </a>
        </section>
    );
};

const WorkWithMeContent = () => {
    const TitleH1 = '¿Sabes Sobre Edición?';
    const TitleH2 = 'Trabaja';
    const SpanH1 = 'Conmigo.';
    const Link = 'https://chat.whatsapp.com/IfV2sveneqLAuYNjl9iGvu';

    return (
        <WorkWithMeItems
            TitleH1={TitleH1}
            TitleH2={TitleH2}
            SpanH1={SpanH1}
            Link={Link}
            ImageSrc={WorkWithMeImg}
        />
    );
};

export default WorkWithMeContent;