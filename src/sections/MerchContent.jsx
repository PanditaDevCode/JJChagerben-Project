import React from "react";
import MerchItems from "../components/MerchItems";
import BtcSaveMyLife from "../assets/images/btc-save-my-life.webp";
import TimeForPlan from "../assets/images/its-time-for-plan.webp";

const MerchContent = () => {
    const Title1 = 'Bitcoin Save My Life';
    const Title2 = "It's Time For Plan";
    const Price = 'Precios';
    const PriceH3 = '30$';
    const Sizes = 'Tallas';
    const Link = 'https://api.whatsapp.com /send?phone=593999864446&text=La%20quiero%20AHORA!%2C%20la%20camisa%20Inconfiscable!';
    const Order = '¡Pídelo Aquí!';

    return (
        <MerchItems
            ImageSrc1={BtcSaveMyLife}
            ImageSrc2={TimeForPlan}
            Title1={Title1}
            Title2={Title2}
            Price={Price}
            PriceH3={PriceH3}
            Sizes={Sizes}
            Link={Link}
            Order={Order}
        />
    );
};

export default MerchContent;