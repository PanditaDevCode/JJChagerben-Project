let locoScroll;

export const initializeLocomotiveScroll = () => {
  if (!locoScroll) {
    const scrollContainer = document.querySelector("[data-scroll-container]");
    if (scrollContainer) {
      locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
      });
    }
  }
};

export const disableScroll = () => {
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.width = "100%";

  if (locoScroll) {
    locoScroll.stop();
  }
};

export const enableScroll = () => {
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.width = "";

  if (locoScroll) {
    locoScroll.start();
  }
};

export const applyDarkOverlay = () => {
  let overlay = document.getElementById("dark-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "dark-overlay";
    overlay.style.position = "fixed";
    document.body.appendChild(overlay);
  }
};

export const removeDarkOverlay = () => {
  const overlay = document.getElementById("dark-overlay");
  if (overlay) {
    overlay.remove();
  }
};

export { locoScroll };
