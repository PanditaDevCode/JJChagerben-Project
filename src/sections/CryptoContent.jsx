import React from "react";
import BtcImg from '../assets/images/btc.webp';

const CryptoItem = ({ ImageSrc, Title, }) => {
    return (
        <section className="crypto container pt-[150px] pb-[70px] pl-0 pr-0 items-center bg-[#1b1b20] max-w-110vh
                            xxs:pt-[20px] xxs:pb-[3em] xxs:flex xxs:pl-[30px] xxs:[30px] xxs:flex-col xxs:content-center
                            xl:flex xl:flex-row-reverse xl:pb-[3em] xl:pt-[5em]">
            <div className="crypto-img xxs:ml-[-5px] xxs:mt-[-2em] xxs:order-1 xxs:mr-[25px]
                            s:w-[80%]
                            md:ml-[5em]
                            x:ml-[9em]
                            lg:ml-[28%]
                            m:ml-[35%]
                            xl:basis-[70%] xl:mt-[5em] xl:mb-0 xl:mr-[5em] xl:ml-[2em] ">
                <img src={ImageSrc} alt={`Imagen de ${Title}`} className="w-[500px] rounded-[20px] m-0 xxs:ml-[2px] xl:h-[20em] xl:w-[40em]" />
            </div>
            <div className="crypto-txt xxs:content-center xxs:flex-wrap xxs:items-center xxs:text-center xxs:max-w-[300px] xxs:mb-[30px] xxs:mr-[30px]
                            s:w-[80%] s:max-w-[50em]
                            mx:mt-[10em] mx:mb-[3em] mx:mr-[4em] mx:w-[80%] xl:text-left ">
                <span className="neonspan text-black font-extrabold ">Introducción a las Criptomonedas</span>
                <h2 className="text-[40px] text-white font-bold leading-normal 
                                xxs:p-[10px] xxs:text-[30px] xxs:mr-[5px] xl:text-left ">
                    ¿Qué son las <span className="text-black font-extrabold ">{Title}</span>?
                </h2>
                <p className=" font-bold text-white xl:text-left ">
                    Una criptomoneda <span className=" text-black font-extrabold ">(también llamado criptoactivo o criptodivisa)</span> es un
                    medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones,
                    controlar la creación de unidades adicionales y verificar la transferencia de activos usando
                    tecnologías de registro distribuido. <span className=" text-black font-extrabold ">Las criptomonedas son un tipo de divisa
                        alternativa o moneda digital.</span>
                </p>
            </div>
        </section>
    );
};

const CryptoContent = () => {
    const Title = "CRIPTOMONEDAS";

    return (
        <CryptoItem
            ImageSrc={BtcImg}
            Title={Title}
        />
    );
};

export default CryptoContent;