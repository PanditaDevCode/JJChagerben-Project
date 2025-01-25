import React from "react";
import BuyAndSaveVid from "../assets/images/buyandsave.webm";
import ChagerbenImg from "../assets/images/jjchagerben.webp";

const AboutItems = ({ ImageSrc, VideoSrc, Title }) => {
  return (
    <section
      id="about-me"
      className="about-me container pt-[150px] pb-[150px] flex flex-col items-center relative
                    xxs:p-[30px] xxs:pb-[60px] xxs:mt-[-6em] xxs:flex-col xxs:content-center 
                    xl:flex-row xl:justify-center xl:items-center xl:gap-[3em]"
    >
      <div
        className="about-me-img xl:basis-[30%] flex justify-center
                    xxs:m-[30px] xxs:w-[18em]"
      >
        <img
          src={ImageSrc}
          alt={`Imagen de ${Title}`}
          className="w-[350px] h-[350px] rounded-full object-cover xxs:h-[18em] xl:h-[21em] "
        />
      </div>
      <div className="about-me1 text-center xl:text-left xl:basis-[40%]">
        <div className="about-me-txt text-[20px] xxs:text-[18px] xl:ml-[2em] ">
          <span className="intro text-black font-bold">Acerca de mí</span>
          <h2>
            <span className="text-black font-bold">{Title}</span>
          </h2>
          <ul className="mb-[20px]">
            <li className="text-white font-medium">
              - Petroleum{" "}
              <span className="text-black font-bold">Engineer.</span>
            </li>
            <li className="text-white font-medium">
              <span className="text-black font-bold">- Jubilado</span> gracias a{" "}
              <span className="text-black font-bold">Bitcoin.</span>
            </li>
            <li className="text-white font-medium">
              - Inversionista en{" "}
              <span className="text-black font-bold">Cripto-Activos.</span>
            </li>
          </ul>
        </div>
        <a
          href="#redes"
          className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-10 font-extrabold rounded-[5px] mt-[15px] inline-block transition-transform duration-300 xl:ml-[3em] xl:mt-[.1em] "
        >
          Redes Sociales
        </a>
      </div>
      <div className="about-me-video xl:basis-[30%] flex justify-center">
        <video
          controls
          src={VideoSrc}
          className="w-[400px] h-[500px] object-cover rounded-[5px] xxs:mt-10"
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