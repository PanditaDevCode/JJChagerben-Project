import React from "react";
import BuyAndSaveVid from '../assets/images/buyandsave.webm';
import ChagerbenImg from '../assets/images/jjchagerben.webp';

const AboutItems = ({ ImageSrc, VideoSrc, Title }) => {
    return (
        <section className="about-me container pt-[150px] pb-[150px] flex items-center relative 
                            xxs:p-[30px] xxs:pb-[60px] xxs:mt-[-6em] xxs:flex-col xxs:content-center" id="about-me">
            <div className="about-me-img basis-[45%] mt-0 mb-0 mr-0 ml-[-7em] flex justify-center 
                            xxs:m-[30px] xxs:w-[18em] ">
                <img src={ImageSrc} alt={`Imagen de ${Title}`} className="w-[350px] h-[350px] rounded-full object-cover xxs:h-[18em] " />
            </div>
            <div className="about-me1 mr-[130px]
                            xxs:text-center xxs:content-center xxs:items-center xxs:m-0 ">
                <div className="about-me-txt whitespace-nowrap basis-[-50%] text-[20px] 
                                xxs:text-center xxs:text-[18px] xxs:items-center xxs:content-center">
                    <span className="intro text-black font-bold">Acerca de mí</span>
                    <h2><span className="text-black font-bold">{Title}</span></h2>
                    <ul className="mb-[20px]">
                        <li className="text-white font-medium">- Petroleum <span className="text-black font-bold">Engineer.</span></li>
                        <li className="text-white font-medium"><span className="text-black font-bold">- Jubilado</span> gracias a <span className="text-black font-bold">Bitcoin.</span></li>
                        <li className="text-white font-medium">- Inversionista en <span className="text-black font-bold">Cripto-Activos.</span></li>
                    </ul>
                </div>
                <a
                    href="#redes"
                    className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-10 font-extrabold rounded-[5px] mt-[15px] inline-block transition-transform duration-300"
                >Redes Sociales</a>
            </div>
            <div className="about-me-video">
                <video
                    controls
                    src={VideoSrc}
                    className="w-[400px] h-[500px] object-cover justify-right mr-[-50px] mt-[-70px] rounded-[5px]
                                xxs:mt-10 xxs:ml-0.5"
                ></video>
            </div>
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
};

export default AboutContent;