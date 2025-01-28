import { useEffect } from "react";

const Modal = ({ isDialogOpen, setIsDialogOpen }) => {
  useEffect(() => {
    if (isDialogOpen) {
      window.disableSmoothScroll();
      document.body.style.overflow = "hidden";
    } else {
      window.enableSmoothScroll();
      document.body.style.overflow = "";
    }
  }, [isDialogOpen]);

  if (!isDialogOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-[10001]"
      onKeyDown={(e) => e.key === "Escape" && setIsDialogOpen(false)}
      tabIndex={0}
    >
      <div
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10002]
      xxs:top-[27.5%] xx:top-[26.5%] sx:top-[26%] s:top-[24.5%] sm:top-[24%] md:top-[21.5%] x:top-[21%] mx:top-[22.5%] lg:top-[22%] m:top-[21.5%] xl:top-[23.5%] 2xl:top-[24.5%]"
      >
        <div className="calc-content calc-text backdrop-blur-[15px] p-6 rounded-lg flex flex-col items-center text-center w-[50em] h-[30em] max-h-screen overflow-hidden">
          <h2 className="text-2xl text-black font-bold mb-4">Nomenclatura</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center text-xl mt-1 -mb-5 text-white">
              <span className="font-bold mr-2">PBTC =</span>
              <div className="flex flex-col items-center">
                <div className="mb-1">
                  (RI * CP) * 2<sup>NH</sup>
                </div>
                <div className="w-full border-t border-white"></div>
                <div className="mt-1">RF</div>
              </div>
            </div>
            <div className="text-lg space-y-1 text-white text-center">
              <p className="-mb-1">RI = Recompensa Inicial</p>
              <p>RF = Recompensa Final</p>
              <p>NH = Número de Halvings</p>
              <p>CP = Costo de Producción</p>
              <p>PBTC = Precio de Bitcoin</p>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-600 pt-4">
            <p className="italic text-lg text-white text-center">
              "No importa cuando leas esto, Bitcoin siempre será barato"
            </p>
            <p className="text-black -mt-6 font-extrabold text-center">
              - JJ CHAGERBEN -
            </p>
          </div>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="btn-1 font-extrabold -mt-5 px-4 py-2 text-white rounded-lg"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
