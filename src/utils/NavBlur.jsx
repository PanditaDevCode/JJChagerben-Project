// NavBlur.jsx
import React, { useEffect } from 'react';

const NavBlur = () => {
    useEffect(() => {
        const handleScroll = () => {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('blur', window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return null; // Este componente no renderiza nada
};

export default NavBlur;