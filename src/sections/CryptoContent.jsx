import React from "react";
import BtcImg from '../assets/images/btc.webp';

const CryptoItem = ({ ImageSrc, Title, }) => {
    return (
        <section className="crypto container flex pt-[150px] pb-[70px] pl-0 pr-0 items-center bg-[#1b1b20] ">
            <div className="crypto-img basis-[45%] mt-0 mb-0 mr-0 ml-[50px]">
                <img src={ImageSrc} alt={`Imagen de ${Title}`} className="w-[500px] rounded-[20px] m-0 " />
            </div>
            <div className="crypto-txt basis-[50%] ">
                <span className="neonspan text-black font-extrabold ">Introducción a las Criptomonedas</span>
                <h2 className="text-[40px] text-white font-bold leading-normal ">¿Qué son las <span className="text-black font-extrabold " >{Title}</span>?</h2>
                <p className=" font-bold text-white ">
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