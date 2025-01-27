import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const NavBlur = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
      smoothMobile: true,
    });

    scroll.on("scroll", ({ scroll }) => {
      const menuBackground = document.querySelector(".menu-background");
      if (menuBackground) {
        menuBackground.classList.toggle("blur", scroll.y > 0);
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return null;
};

export default NavBlur;