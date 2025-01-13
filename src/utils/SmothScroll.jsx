import React, { useEffect } from 'react';

const SmoothScroll = () => {
    useEffect(() => {
        const smoothScroll = (target, duration) => {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime = null;

            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            const ease = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
        };

        document.querySelectorAll('a[href^="#"], button').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href') || anchor.dataset.target;
                const targetElement = document.getElementById(targetId.substring(1));

                if (targetElement) {
                    smoothScroll(targetElement, 1000);
                }
            });
        });

        return () => {
            document.querySelectorAll('a[href^="#"], button').forEach(anchor => {
                anchor.removeEventListener('click', () => { });
            });
        };
    }, []);

    return null;
};

export default SmoothScroll;