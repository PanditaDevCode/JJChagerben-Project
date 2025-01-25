import React, { useEffect } from "react";

const NavBlur = () => {
  useEffect(() => {
    const handleScroll = () => {
      const menuBackground = document.querySelector(".menu-background");
      menuBackground.classList.toggle("blur", window.scrollY > 0);
    };

    const handleMenuClick = () => {
      const menuToggle = document.getElementById("menu-toggle");
      if (menuToggle) {
        menuToggle.checked = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const menuLinks = document.querySelectorAll(".navbar a");
    menuLinks.forEach((link) =>
      link.addEventListener("click", handleMenuClick)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuLinks.forEach((link) =>
        link.removeEventListener("click", handleMenuClick)
      );
    };
  }, []);

  return null;
};

export default NavBlur;