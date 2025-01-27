import { useState } from "react";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <section
      className="menu fixed top-0 left-0 w-full h-[60px] z-10000 flex items-center justify-between pt-0 pb-0 pl-[20px] pr-[20px] 
                    xxs:w-full xxs:mb-0 md:w-full md:mb-0"
      id="menu"
    >
      <div className="menu-background absolute inset-0 transition-all duration-300 bg-cover bg-center"></div>
      <a
        href="#about-me"
        className="logo xxs:text-white xxs:text-[17px] xxs:font-extrabold xxs:whitespace-nowrap xxs:z-10000 xxs:relative xxs:ml-[10px] xxs:hover:scale-[1.05] xxs:hover:text-[#131313]"
      >
        JJChagerben
      </a>
      <input type="checkbox" id="menu-toggle" className="menu-toggle hidden" />
      <label htmlFor="menu-toggle" className="menu-label z-10 relative">
        <div className="menu-icon">
          <span className="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] ml-auto mr-auto relative bg-white"></span>
          <span className="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] ml-auto mr-auto relative bg-white"></span>
          <span className="rounded-[5px] block w-[30px] h-[4px] mt-[6px] mb-[6px] ml-auto mr-auto relative bg-white"></span>
        </div>
      </label>
      <nav
        className="navbar absolute top-full left-[-88px] right-0 w-full hidden z-9999 p-0 m-0
                    xxs:mt-0 xxs:absolute xxs:left-0 xxs:w-full xxs:bg-RGBA1 xxs:backdrop-blur-[5px] 
                    lg:bg-transparent lg:backdrop-blur-0 lg:mt-[-.5em] lg:ml-[-15em]
                    m:ml-[-4em]
                    xl:bg-transparent xl:backdrop-blur-0 xl:ml-[-3em]"
      >
        <ul className="xxs:list-none xxs:m-0 xxs:p-0 xxs:w-full xxs:text-[17px] xxs:font-bold xxs:flex xxs:flex-col xxs:content-center xxs:items-center xxs:whitespace-nowrap xl:space-x-1">
          <li className="xxs:w-full xxs:text-center xxs:pt-[15px] xxs:pb-[15px] xxs:p-0 lg:mr-[-1em]">
            <a
              href="#tradingview-chart"
              className="block w-full px-4 py-2 text-white"
              onClick={() => closeMenu()}
            >
              Gráfico
            </a>
          </li>
          <li className="xxs:w-full xxs:text-center xxs:pt-[15px] xxs:pb-[15px] xxs:p-0 lg:mr-[-1.5em]">
            <a
              href="#about-me"
              className="block w-full px-4 py-2 text-white"
              onClick={() => closeMenu()}
            >
              Acerca de Mi
            </a>
          </li>
          <li className="xxs:w-full xxs:text-center xxs:pt-[15px] xxs:pb-[15px] xxs:p-0 lg:mr-[-1.5em]">
            <a
              href="#lives"
              className="block w-full px-4 py-2 text-white"
              onClick={() => closeMenu()}
            >
              Directos
            </a>
          </li>
          <li className="xxs:w-full xxs:text-center xxs:pt-[15px] xxs:pb-[15px] xxs:p-0 lg:mr-[-1.5em]">
            <a
              href="#work-with-me"
              className="block w-full px-4 py-2 text-white"
              onClick={() => closeMenu()}
            >
              Trabaja Conmigo
            </a>
          </li>
          <li className="xxs:w-full xxs:text-center xxs:pt-[15px] xxs:pb-[15px] xxs:p-0 lg:mr-[-1.5em]">
            <a
              href="#redes"
              className="block w-full px-4 py-2 text-white"
              onClick={() => closeMenu()}
            >
              Redes Sociales
            </a>
          </li>
          <li className="xxs:w-full xxs:text-center xxs:pt-[15px] xxs:pb-[15px] xxs:p-0 lg:mr-[-1.5em]">
            <a
              href="#merch"
              className="block w-full px-4 py-2 text-white"
              onClick={() => closeMenu()}
            >
              Merch
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MenuNav;