import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScrollLinks = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
      smoothMobile: true,
    });

    const resetScroll = () => {
      setTimeout(() => {
        scroll.update();
      }, 1000);
    };

    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        scroll.scrollTo(targetElement, {
          duration: 1200,
          offset: -50,
          easing: [0.25, 0.0, 0.35, 1.0],
          disableLerp: true,
        });

        setTimeout(() => {
          scroll.update();
          window.dispatchEvent(new Event("scroll"));
        }, 1200);
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
      scroll.destroy();
    };
  }, []);

  return null;
};

export default SmoothScrollLinks;
