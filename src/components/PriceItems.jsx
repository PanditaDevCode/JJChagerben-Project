import React from 'react';
import PropTypes from 'prop-types';

const PriceMentoring = ({ services }) => {
    return (
        <section className="price container" id="precios">
            <div className="price-text">
                <span>Rango de Servicios</span>
                <h2>Lista de Precios</h2>
            </div>

            <div className="price-content">
                {services.map((service, index) => (
                    <div className={`price-1 ${index % 2 === 1 ? 'bg-pack' : ''}`} key={service.title}>
                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                            <p className="pack">{service.title}</p>
                            <span className="paquetes"><strong>{service.description}</strong></span>
                            <h3>{service.price}</h3>
                            <p><strong>{service.payment}</strong></p>
                            <ul>
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>- {feature}</li>
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