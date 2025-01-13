import React from "react";
import PropTypes from "prop-types";

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

MerchItems.propTypes = {
    ImageSrc1: PropTypes.string.isRequired,
    ImageSrc2: PropTypes.string.isRequired,
    Title1: PropTypes.string.isRequired,
    Title2: PropTypes.string.isRequired,
    PriceH3: PropTypes.string.isRequired,
    Sizes: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired,
    Order: PropTypes.string.isRequired,
};

export default MerchItems;