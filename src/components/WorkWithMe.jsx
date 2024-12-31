import React from "react";
import WorkWithMeImg from '../assets/images/workwithme.webp';

const WorkWithMeItems = ({ ImageSrc, TitleH1, TitleH2, SpanH1, Link }) => {
    return (
        <section className="work-with-me container">
            <div id="work-with-me">
                <div className="work-with-me-img">
                    <img src={ImageSrc} alt="Imagen que representa trabajar conmigo" />
                </div>
                <div className="work-with-me-txt">
                    <h1><span>{TitleH1}</span></h1>
                    <h2>{TitleH2} <span>{SpanH1}</span></h2>
                    <ul>
                        <li>- Estar pendiente de los <span>Directos</span> en mis <a href="#redes"><span>Redes Sociales.</span></a></li>
                        <li>- Reglas para el <span>Trabajo</span> en el <a href={Link} target="_blank" rel="noopener noreferrer"><span>Grupo de Editores.</span></a></li>
                        <li>- Tener conocimientos en <span>Programas de Edición</span> como <span>CapCut</span> u otros <span>Editores.</span></li>
                    </ul>
                    <a href={Link} target="_blank" rel="noopener noreferrer" className="btn-1">Grupo de Editores</a>
                </div>
            </div>
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