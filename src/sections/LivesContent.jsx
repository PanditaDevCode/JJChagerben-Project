import React from "react";
import LivesImg from '../assets/images/live-img.webp';

const LivesItems = ({ TitleH1, TitleH2, Link1, Link2, Link3, ImageSrc }) => {
    return (
        <section className="lives container pt-[200px] pb-[200px] pl-0 pr-0 flex items-center bg-[#1b1b20] ml-0 mr-0 ">
            <div id="lives">
                <div className="lives-txt basis-[55%] m-0 text-[18px] ">
                    <div className="live-txt1 ml-[50px] ">
                        <h1><span className="intro text-black font-extrabold ">{TitleH1}</span></h1>
                        <h2><span className=" text-black font-extrabold">{TitleH2}</span></h2>
                        <ul className="mb-[25px] ">
                            <li className="text-white">- Hora de los directos: <span className=" text-black font-extrabold">20:00 PM</span></li>
                            <li className="text-white">- Zona Horaria: <span className=" text-black font-extrabold">UTC - 05:00</span></li>
                            <li className="text-white">- Directos en mis redes sociales: <span className=" text-black font-extrabold">(TikTok - Twitch - YouTube)</span></li>
                        </ul>
                        <div className="btn-container flex flex-wrap">
                            <a href={Link1} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px]">YouTube</a>
                            <a href={Link2} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px]">Twitch</a>
                            <a href={Link3} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-2 font-extrabold rounded-[5px] mt-0 mb-0 ml-[15px] mr-[15px]">TikTok</a>
                        </div>
                    </div>
                </div>
                <div className="lives-img w-[80%] basis-[45%] mt-[-16em] mb-0 ml-[48em] mr-0 ">
                    <img src={ImageSrc} alt="Imagen de directos en vivo" className="w-[500px] rounded-[20px] " />
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