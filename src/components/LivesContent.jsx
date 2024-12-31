import React from "react";
import LivesImg from '../assets/images/live-img.webp';

const LivesItems = ({ TitleH1, TitleH2, Link1, Link2, Link3, ImageSrc }) => {
    return (
        <section className="lives container">
            <div id="lives">
                <div className="lives-txt">
                    <div className="live-txt1">
                        <h1><span className="intro">{TitleH1}</span></h1>
                        <h2><span>{TitleH2}</span></h2>
                        <ul>
                            <li>- Hora de los directos: <span>20:00 PM</span></li>
                            <li>- Zona Horaria: <span>UTC - 05:00</span></li>
                            <li>- Directos en mis redes sociales: <span>(TikTok - Twitch - YouTube)</span></li>
                        </ul>
                        <div className="btn-container">
                            <div className="btn-group">
                                <a href={Link1} target="_blank" rel="noopener noreferrer" className="btn-1">YouTube</a>
                                <a href={Link2} target="_blank" rel="noopener noreferrer" className="btn-1">Twitch</a>
                            </div>
                            <a href={Link3} target="_blank" rel="noopener noreferrer" className="btn-1">TikTok</a>
                        </div>
                    </div>
                </div>
                <div className="lives-img">
                    <img src={ImageSrc} alt="Imagen de directos en vivo" />
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