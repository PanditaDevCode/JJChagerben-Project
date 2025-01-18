import React from "react";

const SocialContent = ({ title, socialItems }) => {
    return (
        <section id="redes" className="bg-[#12121c] mt-[-50px] relative xl:relative">
            <div className="redes-background bg-BGRedes bg-cover bg-no-repeat 
                            xxs:bg-cover xxs:bg-no-repeat
                            xl:pt-[5em] xl:pb-[5em]">
                <main className="redes container pt-[30px] pb-[200px] text-center mt-[20px] 
                                xxs:p-[30px] xxs:pt-1 ">
                    <h2 className="font-extrabold p-[10px] z-[9999] mt-[150px] mb-[50px] rounded-[5px] relative hover:scale-[1.02] cursor-pointer hover:text-[#dadada]
                                    xxs:mt-[3em]">
                        {title}
                    </h2>
                    <div className="redes-content grid gap-[30px] mb-[-50px] mt-[20px] z-[9999] 
                                    xxs:mb-[30px] xxs:grid-cols-1 
                                    xl:grid-cols-3 xl:grid ">
                        {socialItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className={`redes-sociales relative rounded-[15px] hover:scale-105 z-[9999] transition-transform duration-500`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className={`${item.divClassName} rounded-[15px] bg-center bg-cover h-full w-full p-[35px] flex flex-col justify-center items-center z-[9999] relative`}
                                >
                                    <h3 className="mt-[10px] relative z-[9999] text-white mb-[15px] font-bold">
                                        {item.title}
                                    </h3>
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
        { id: 1, title: 'TikTok', link: 'https://www.tiktok.com/@jjchagerben753', className: 'redes-sociales bg-BGTiktok ', divClassName: 'tiktok' },
        { id: 2, title: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=593998177135&text=Información+sobre+la+MENTORIA+PREMIUM', className: 'redes-sociales', divClassName: 'whatsapp' },
        { id: 3, title: 'Telegram', link: 'https://t.me/jjchagerben357', className: 'redes-sociales', divClassName: 'telegram' },
        { id: 4, title: 'Instagram', link: 'https://www.instagram.com/jjchagerben', className: 'redes-sociales', divClassName: 'instagram' },
        { id: 5, title: 'Facebook', link: 'https://www.facebook.com/people/JJChagerben/61557765639522/?mibextid=ZbWKwL', className: 'redes-sociales', divClassName: 'facebook' },
        { id: 6, title: 'X', link: 'https://x.com/LOKI747', className: 'redes-sociales', divClassName: 'x' },
    ];

    return (
        <SocialContent title={title} socialItems={socialItems} />
    );
};

export default SocialItems;