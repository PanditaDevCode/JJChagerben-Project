import React, { useEffect, useState } from 'react';

const GoTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 250);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a
            href="#header"
            id="goTop"
            className={visible ? 'show' : ''}
        >
            <i className="fas fa-arrow-up"></i>
        </a>
    );
};

export default GoTopButton;