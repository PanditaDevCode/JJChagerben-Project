import React from "react";

const SocialContent = ({ title, socialItems }) => {
    return (
        <section id="redes">
            <div className="redes-background">
                <main className="redes container">
                    <h2>{title}</h2>
                    <div className="redes-content">
                        {socialItems.map((item, index) => (
                            <a key={index} href={item.link} className={item.className} target="_blank" rel="noopener noreferrer">
                                <div className={item.divClassName}>
                                    <h3>{item.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

const SocialItems = () => {
    const title = 'Redes Oficiales';
    const socialItems = [
        { title: 'TikTok', link: 'https://www.tiktok.com/@jjchagerben753', className: 'redes-sociales', divClassName: 'tiktok' },
        { title: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM', className: 'redes-sociales', divClassName: 'whatsapp' },
        { title: 'Telegram', link: 'https://t.me/jjchagerben357', className: 'redes-sociales', divClassName: 'telegram' },
        { title: 'Instagram', link: 'https://www.instagram.com/jjchagerben', className: 'redes-sociales', divClassName: 'instagram' },
        { title: 'Facebook', link: 'https://www.facebook.com/people/JJChagerben/61557765639522/?mibextid=ZbWKwL', className: 'redes-sociales', divClassName: 'facebook' },
        { title: 'X', link: 'https://x.com/LOKI747', className: 'redes-sociales', divClassName: 'x' },
    ];

    return (
        <SocialContent title={title} socialItems={socialItems} />
    );
};

export default SocialItems;