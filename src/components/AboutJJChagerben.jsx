import React from "react";
import BuyAndSaveVid from '../assets/images/buyandsave.webm';
import ChagerbenImg from '../assets/images/jjchagerben.webp';

const AboutItems = ({ ImageSrc, VideoSrc, Title }) => {
    return (
        <section className="about-me container" id="about-me">
            <div className="about-me-img">
                <img src={ImageSrc} alt={`Imagen de ${Title}`} />
            </div>

            <div className="about-me1">
                <div className="about-me-txt">
                    <span className="intro">Acerca de mí</span>
                    <h2><span>{Title}</span></h2>

                    <ul>
                        <li>- Petroleum <span>Engineer.</span></li>
                        <li><span>- Jubilado</span> gracias a <span>Bitcoin.</span></li>
                        <li>- Inversionista en <span>Cripto-Activos.</span></li>
                    </ul>

                    <a href="#redes" className="btn-1">Redes Sociales</a>
                </div>
            </div>

            <video controls src={VideoSrc}></video>
        </section>
    );
};

const AboutContent = () => {
    const Title = "JJChagerben";

    return (
        <AboutItems
            ImageSrc={ChagerbenImg}
            VideoSrc={BuyAndSaveVid}
            Title={Title}
        />
    );
}

export default AboutContent;