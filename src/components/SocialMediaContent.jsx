import React from "react";

const Title = "Redes Oficiales";
const SocialMedia = [
    { name: "TikTok", id: "1", link: "https://www.tiktok.com/@jjchagerben753" },
    { name: "WhatsApp", id: "2", link: "https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM" },
    { name: "Telegram", id: "3", link: "https://t.me/jjchagerben357" },
    { name: "Instagram", id: "4", link: "https://www.instagram.com/jjchagerben" },
    { name: "Facebook", id: "5", link: "https://www.facebook.com/people/JJChagerben/61557765639522/?mibextid=ZbWKwL" },
    { name: "X", id: "6", link: "https://x.com/LOKI747" },
];

const SocialMediaContent = () => {
    return (
        <section id="redes">
            <div className="redes-background">
                <main className="redes container">
                    <h2>{Title}</h2>
                    <div className="redes-content">
                        {SocialMedia.map((Social) => (
                            <a 
                                className="redes-sociales" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                key={Social.id} 
                                href={Social.link}
                            >
                                <div className={Social.name}></div>
                                <h3>{Social.name}</h3>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default SocialMediaContent;