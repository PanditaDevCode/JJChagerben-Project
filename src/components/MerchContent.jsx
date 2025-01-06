import React from "react";
import BtcSaveMyLife from "../assets/images/btc-save-my-life.webp";
import TimeForPlan from "../assets/images/its-time-for-plan.webp";

const MerchItems = ({ ImageSrc1, ImageSrc2, Title1, Title2, PriceH3, Sizes, Price, Link, Order }) => {
    const sizeOptions = [
        { id: 1, label: 'S' },
        { id: 2, label: 'M' },
        { id: 3, label: 'L' },
        { id: 4, label: 'XL' },
        { id: 5, label: 'XXL' }
    ];

    return (
        <section className="merch-btc" id="merch">
            <div className="merch-container">
                <div className="merch">
                    <div className="merch-img">
                        <img src={ImageSrc1} alt={Title1} />
                    </div>
                    <div className="merch-content">
                        <h2>{Title1}</h2>
                        <div className="size">
                            <h3>{Sizes}</h3>
                            <ul className="size-list">
                                {sizeOptions.map((size) => (
                                    <li key={size.id}>
                                        <span>{size.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-merch">
                            <span>{Price}</span>
                            <h3>{PriceH3}</h3>
                            <a href={Link} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                                {Order}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="merch">
                    <div className="merch-img">
                        <img src={ImageSrc2} alt={Title2} />
                    </div>
                    <div className="merch-content">
                        <h2>{Title2}</h2>
                        <div className="size">
                            <h3>{Sizes}</h3>
                            <ul className="size-list">
                                {sizeOptions.map((size) => (
                                    <li key={size.id}>
                                        <span>{size.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-merch">
                            <span>{Price}</span>
                            <h3>{PriceH3}</h3>
                            <a href={Link} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                                {Order}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MerchContent = () => {
    const Title1 = 'Bitcoin Save My Life';
    const Title2 = "It's Time For Plan";
    const Price = 'Precios';
    const PriceH3 = '30$';
    const Sizes = 'Tallas';
    const Link = 'https://api.whatsapp.com/send?phone=593999864446&text=La%20quiero%20AHORA!%2C%20la%20camisa%20Inconfiscable!';
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