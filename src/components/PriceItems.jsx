import React from 'react';
import PropTypes from 'prop-types';

const PriceMentoring = ({ services }) => {
    return (
        <section className="price container pt-[130px] pb-[100px] pl-0 pr-0 text-center" id="precios">
            <div className="price-text mt-[-60px]">
                <span className='text-black font-extrabold text-[20px] '>Rango de Servicios</span>
                <h2 className='text-[50px] mb-[100px] text-[#141414] font-bold'>Lista de Precios</h2>
            </div>

            <div className="price-content flex justify-between mt-[45px]">
                {services.map((service, index) => (
                    <div className={`price-1 ${index % 2 === 1 ? 'bg-pack mt-[-50px]' : ''} p-[40px] rounded-[15px] bg-[#222222] hover:cursor-pointer hover:scale-[1.03] `} key={service.title}>
                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                            <p className="pack text-black font-semibold mb-[10px] text-[30px] ">{service.title}</p>
                            <span className="paquetes text-black font-extrabold text-[20px]"><strong>{service.description}</strong></span>
                            <h3 className='text-white text-[70px] font-bold'>{service.price}</h3>
                            <p><strong>{service.payment}</strong></p>
                            <ul>
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className='text-white mb-[15px] font-semibold '>- {feature}</li>
                                ))}
                            </ul>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

PriceMentoring.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            payment: PropTypes.string.isRequired,
            features: PropTypes.arrayOf(PropTypes.string).isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default PriceMentoring;