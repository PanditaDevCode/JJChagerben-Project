import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

const GoTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
      smoothMobile: true,
    });

    scroll.on("scroll", ({ scroll }) => {
      setVisible(scroll.y > 250);
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const scrollToTop = () => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true,
      smoothMobile: true,
    });
    scroll.scrollTo(0);
  };

  return (
    <a
      href="#header"
      id="goTop"
      className={visible ? "show" : ""}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
};

export default GoTopButton;