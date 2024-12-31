import React from "react";
import BtcImg from '../assets/images/btc.webp';

const CryptoItem = ({ ImageSrc, Title, Description }) => {
    return (
        <section className="crypto container">
            <div className="crypto-img">
                <img src={ImageSrc} alt={`Imagen de ${Title}`} />
            </div>
            <div className="crypto-txt">
                <span className="neonspan">Introducción a las Criptomonedas</span>
                <h2>¿Qué son las <span>{Title}</span>?</h2>
                <p className="crypto-p">{Description}</p>
            </div>
        </section>
    );
};

const CryptoContent = () => {
    const Title = "CRIPTOMONEDAS";
    const Description = "Una criptomoneda (también llamado criptoactivo o criptodivisa) es un medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones, controlar la creación de unidades adicionales y verificar la transferencia de activos usando tecnologías de registro distribuido. Las criptomonedas son un tipo de divisa alternativa o moneda digital.";

    return (
        <CryptoItem
            ImageSrc={BtcImg}
            Title={Title}
            Description={Description}
        />
    );
};

export default CryptoContent;