import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScroll = () => {
  const [scrollInstance, setScrollInstance] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-content"),
      smooth: true,
      lerp: 0.1,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    setScrollInstance(scroll);

    scroll.on("scroll", ({ scroll }) => {
      const menuBackground = document.querySelector(".menu-background");
      if (menuBackground) {
        menuBackground.classList.toggle("blur", scroll.y > 0);
      }

      setVisible(scroll.y > 250);
    });

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

      const menu = document.querySelector(".menu"); 
      if (menu) {
        menu.classList.remove("is-open"); 
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <a
        href="#header"
        id="goTop"
        className={visible ? "show" : ""}
        onClick={(e) => {
          e.preventDefault();
          scrollInstance?.scrollTo(0);
        }}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
};

export default SmoothScroll;