import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = () => {
  const [scrollInstance, setScrollInstance] = useState(null);
  const [visible, setVisible] = useState(false);
  const isMobile =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-content"),
      smooth: true,
      lerp: isMobile ? 0.2 : 0.1,
      multiplier: isMobile ? 0.5 : 1,
      smartphone: {
        smooth: true,
        breakpoint: 767,
        lerp: 0.2,
        multiplier: 0.5,
        getDirection: true,
        touchMultiplier: 3,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
        lerp: 0.15,
        multiplier: 0.7,
        touchMultiplier: 2,
      },
    });

    setScrollInstance(scroll);

    const handleScroll = ({ scroll: { y } }) => {
      const menuBackground = document.querySelector(".menu-background");
      if (menuBackground) {
        menuBackground.classList.toggle("blur", y > 0);
      }
      setVisible(y > 250);
    };

    scroll.on("scroll", handleScroll);

    const handleLinkClick = (e) => {
      e.preventDefault();
      const target = e.target;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = targetId ? document.getElementById(targetId) : null;

      if (targetElement) {
        scroll.scrollTo(targetElement, {
          duration: isMobile ? 600 : 1200,
          offset: -50,
          easing: [0.25, 0.0, 0.35, 1.0],
          disableLerp: isMobile,
        });

        setTimeout(() => {
          scroll.update();
          window.dispatchEvent(new Event("scroll"));
        }, isMobile ? 600 : 1200);
      }

      const menu = document.querySelector(".menu");
      if (menu) {
        menu.classList.remove("is-open");
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
  }, [isMobile]);

  const disableSmoothScroll = () => {
    if (scrollInstance) {
      scrollInstance.stop();
    }
  };

  const enableSmoothScroll = () => {
    if (scrollInstance) {
      scrollInstance.start();
    }
  };

  if (typeof window !== "undefined") {
    window.disableSmoothScroll = disableSmoothScroll;
    window.enableSmoothScroll = enableSmoothScroll;
  }

  return (
    <>
      <a
        href="#header"
        id="goTop"
        className={`scroll-top-button ${visible ? "show" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          scrollInstance?.scrollTo(0, {
            duration: isMobile ? 800 : 1200,
            easing: [0.25, 0.0, 0.35, 1.0],
          });
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
};

export default SmoothScroll;