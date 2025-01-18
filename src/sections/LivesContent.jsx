import React from "react";
import LivesImg from '../assets/images/live-img.webp';

const LivesItems = ({ TitleH1, TitleH2, Link1, Link2, Link3, ImageSrc }) => {
    return (
        <section id="lives" className="lives container pt-[200px] pb-[200px] pl-0 pr-0 flex items-center bg-[#1b1b20] ml-0 mr-0 
                            xxs:flex-col xxs:content-center xxs:items-center xxs:justify-center xxs:text-center xxs:m-0 xxs:pt-0 xxs:pb-[50px]
                            xl:pt-[10em] xl:pb-[10em]">
            <div className="flex flex-col xl:flex-row">
                <div className="lives-txt basis-[55%] m-0 text-[18px]
                                xxs:content-center xxs:text-center xxs:items-center xxs:mt-[30px] xxs:mb-[30px] xxs:ml-[-20px]
                                xl:text-left xl:mr-6 xl:ml-[-3em]">
                    <div className="live-txt1 ml-[50px] xxs:content-center xxs:mr-[30px] ">
                        <h1><span className="intro text-black font-extrabold ">{TitleH1}</span></h1>
                        <h2><span className=" text-black font-extrabold">{TitleH2}</span></h2>
                        <ul className="mb-[25px] ">
                            <li className="text-white">- Hora de los directos: <span className=" text-black font-extrabold">20:00 PM</span></li>
                            <li className="text-white">- Zona Horaria: <span className=" text-black font-extrabold">UTC - 05:00</span></li>
                            <li className="text-white">- Directos en mis redes sociales: <span className=" text-black font-extrabold">(TikTok - Twitch - YouTube)</span></li>
                        </ul>
                        <div className="btn-container flex flex-wrap 
                                        xxs:flex xxs:flex-col xxs:items-center xxs:justify-center
                                        xl:flex-row xl:items-center xl:justify-start xl:mt-[-1em]">
                            <div className="xxs:flex">
                                <a href={Link1} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px] xxs:m-[10px]">YouTube</a>
                                <a href={Link2} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px] xxs:m-[10px]">Twitch</a>
                            </div>
                            <a href={Link3} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px] xxs:m-[10px]">TikTok</a>
                        </div>
                    </div>
                </div>
                <div className="lives-img w-[80%] basis-[45%] mt-[-16em] mb-0 ml-0 mr-0 
                                xxs:order-1 xxs:ml-[3.3em] xxs:mt-[2em] 
                                xs:ml-[4.5em] s:ml-[3.5em]
                                md:ml-[4em] xl:ml-[0] xl:mt-0 xl:order-2">
                    <img src={ImageSrc} alt="Imagen de directos en vivo" className="w-[500px] rounded-[20px] xxs:items-center xxs:content-center xxs:w-[280px] s:h-[18em] s:ml-3 s:w-[100em] md:w-[35em] md:h-[18em] " />
                </div>
            </div>
        </section>
    );
};

const LivesContent = () => {
    const TitleH1 = 'Directos';
    const TitleH2 = 'De Lunes a Domingo';
    const Link1 = 'https://www.youtube.com/@jjchagerben';
    const Link2 = 'https://www.twitch.tv/jjchagerben';
    const Link3 = 'https://www.tiktok.com/@jjchagerben753';

    return (
        <LivesItems
            TitleH1={TitleH1}
            TitleH2={TitleH2}
            Link1={Link1}
            Link2={Link2}
            Link3={Link3}
            ImageSrc={LivesImg}
        />
    );
};

export default LivesContent;