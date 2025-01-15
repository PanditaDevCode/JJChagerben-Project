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
            <div className="merch-container bg-[#1b1b20] pt-[85px] pb-[85px] pl-0 pr-0 items-center justify-center flex relative gap-[100px] ">
                <div className="merch relative w-[350px] h-[500px] bg-[#232323] overflow-hidden rounded-[20px] ">
                    <div className="merch-img absolute top-[50%] z-1000 w-full h-full  ">
                        <img src={ImageSrc1} alt={Title1} className="absolute items-center justify-center top-[27%] left-[15%] w-[240px] " />
                    </div>
                    <div className="merch-content absolute bottom-0 w-full h-[100px] text-center z-90 ">
                        <h2 className="relative font-extrabold tracking-[1px] text-[#111111] text-[30px] ">{Title1}</h2>
                        <div className="size flex justify-center align-center pt-[8px] pb-[8px] pl-[20px] pr-[20px] opacity-0 invisible ">
                            <h3 className="text-[#0c0c0c] font-extrabold">{Sizes}</h3>
                            <ul className="size-list list-none p-0 m-0 ml-[10px] flex ">
                                {sizeOptions.map((size) => (
                                    <li key={size.id} className="hover:cursor-pointer hover:scale-[1.05]">
                                        <span className="w-[35px] h-[25px] text-center grid place-content-center bg-[#111] text-white mt-0 mb-0 ml-[5px] mr-[5px] text-[14px] font-semibold rounded-[4px] z-10 cursor-pointer hover:cursor-pointer hover:scale-[1.05] ">{size.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-merch">
                            <span className="text-[#0c0c0c] font-extrabold ">{Price}</span>
                            <h3 className="text-white font-extrabold mb-[10px] ">{PriceH3}</h3>
                            <a href={Link} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-10 font-extrabold rounded-[5px] mt-[15px] inline-block transition-transform duration-300">
                                {Order}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="merch relative w-[350px] h-[500px] bg-[#232323] overflow-hidden rounded-[20px] ">
                    <div className="merch-img absolute top-[50%] z-1000 w-full h-full  ">
                        <img src={ImageSrc2} alt={Title2} className="absolute items-center justify-center top-[27%] left-[15%] w-[240px] " />
                    </div>
                    <div className="merch-content absolute bottom-0 w-full h-[100px] text-center z-90 ">
                        <h2 className="relative font-extrabold tracking-[1px] text-[#111111] text-[30px] ">{Title2}</h2>
                        <div className="size flex justify-center align-center pt-[8px] pb-[8px] pl-[20px] pr-[20px] opacity-0 invisible ">
                            <h3 className="text-[#0c0c0c] font-extrabold">{Sizes}</h3>
                            <ul className="size-list list-none p-0 m-0 ml-[10px] flex ">
                                {sizeOptions.map((size) => (
                                    <li key={size.id} className="hover:cursor-pointer hover:scale-[1.05]">
                                        <span className="w-[35px] h-[25px] text-center grid place-content-center bg-[#111] text-white mt-0 mb-0 ml-[5px] mr-[5px] text-[14px] font-semibold rounded-[4px] z-10 cursor-pointer hover:cursor-pointer hover:scale-[1.05] ">{size.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-merch">
                            <span className="text-[#0 c0c0c] font-extrabold ">{Price}</span>
                            <h3 className="text-white font-extrabold mb-[10px] ">{PriceH3}</h3>
                            <a href={Link} target="_blank" rel="noopener noreferrer" className="btn-1 bg-[#12121cd2] text-[#fdfeff] pt-[11px] pb-[11px] pl-[35px] pr-[35px] z-10 font-extrabold rounded-[5px] mt-[15px] inline-block transition-transform duration-300">
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