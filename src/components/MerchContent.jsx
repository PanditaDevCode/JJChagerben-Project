import React from "react";

const MerchItems = ({ ImageSrc1, ImageSrc2, Title1, Title2, PriceH3, Sizes, Price, Link, Order }) => {
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
                                <li><span>S</span></li>
                                <li><span>M</span></li>
                                <li><span>L</span></li>
                                <li><span>XL</span></li>
                                <li><span>XXL</span></li>
                            </ul>
                        </div>
                        <div className="info-merch">
                            <span>{Price}</span>
                            <h3>{PriceH3}</h3>
                            <a href={Link}
                                target="_blank" class="whatsapp-button">
                                {Order}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="merch">
                    <div className="merch-img">
                        <img src={ImageSrc2} alt={Title2} />
                    </div>
                    <div class="merch-content">
                        <h2>{Title2}</h2>
                        <div className="size">
                            <h3>{Sizes}</h3>
                            <ul className="size-list">
                                <li><span>S</span></li>
                                <li><span>M</span></li>
                                <li><span>L</span></li>
                                <li><span>XL</span></li>
                                <li><span>XXL</span></li>
                            </ul>
                        </div>
                        <div className="info-merch">
                            <span>{Price}</span>
                            <h3>{PriceH3}</h3>
                            <a href={Link}
                                target="_blank" class="whatsapp-button">
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
    return(
        
    );
};