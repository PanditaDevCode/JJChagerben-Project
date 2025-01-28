import { useState, useEffect } from "react";
import { BTCPriceDisplay } from "../components/common/BTCPriceDisplay";
import { HalvingInfo } from "../components/common/HalvingInfo";
import { InvestmentInputs } from "../components/common/InvestmentInputs";
import { ProjectionTable } from "../components/common/ProjectionTable";
import { Info } from "lucide-react";
import {
  getCurrentHalvingInfo,
  calculateRetirementHalving,
  generateHalvingTable,
} from "../utils/bitcoinCalculations";

const Dialog = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const Index = () => {
  const [btcPrice, setBtcPrice] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [currentHalving, setCurrentHalving] = useState(getCurrentHalvingInfo());
  const [retirementHalving, setRetirementHalving] = useState({
    number: 0,
    year: 0,
    blockReward: 0,
  });
  const [projections, setProjections] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        const data = await response.json();
        setBtcPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("Error al obtener precio de BTC:", error);
      }
    };

    fetchPrice();
  }, []);

  useEffect(() => {
    setRetirementHalving(calculateRetirementHalving(investment));
    setProjections(generateHalvingTable(investment, btcPrice));
  }, [investment, btcPrice]);

  return (
    <div id="calcBTC" className="min-h-screen mt-1 mb-5 bg-[#141418] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="calc-text mb-8 text-center text-3xl font-bold text-white">
          Calculadora de Inversión en Bitcoin
        </h1>
        <div className="calc-content calc-text bg-[#1b1b20] text-white p-4 rounded-lg mt-4 mb-10 text-center">
          Estos valores son especulativos de forma estática sobre un modelo
          estático, pueden cambiar si cambian las condiciones de mercado.
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative calc-content space-y-6 rounded-xl bg-[#1b1b20] p-10 shadow-lg">
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setIsDialogOpen(true)}
                className="calc-content border p-2 rounded transition-transform duration-300 ease-in-out hover:scale-[1.05]"
              >
                <Info className="h-4 w-4 text-white" />
              </button>
            </div>

            {isDialogOpen && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-9999"
                onKeyDown={(e) => e.key === "Escape" && setIsDialogOpen(false)}
                tabIndex={0}
              >
                <div className="calc-content calc-text backdrop-blur-[15px] p-6 rounded-lg flex flex-col items-center text-center w-[50em] h-[30em] max-h-screen overflow-hidden">
                  <h2 className="text-2xl text-black font-bold mb-4">
                    Nomenclatura
                  </h2>
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
                    <div className="text-lg space-y-1 text-white">
                      <p className="-mb-1">RI = Recompensa Inicial</p>
                      <p>RF = Recompensa Final</p>
                      <p>NH = Número de Halvings</p>
                      <p>CP = Costo de Producción</p>
                      <p>PBTC = Precio de Bitcoin</p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-600 pt-4">
                    <p className="italic text-lg text-white">
                      "No importa cuando leas esto, Bitcoin siempre será barato"
                    </p>
                    <p className=" text-black -mt-6 font-extrabold">
                      - JJ CHAGERBEN -
                    </p>
                  </div>
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="btn-1 font-extrabold -mt-5 px-4 py-2 text-white rounded-lg pt-[11px] pb-[11px] pl-[35px] pr-[35px]"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}

            <BTCPriceDisplay />

            <div className="space-y-4">
              <h2 className="calc-text text-xl font-semibold text-white ">
                Calculadora de Inversión
              </h2>
              <InvestmentInputs
                usdAmount={investment}
                btcPrice={btcPrice}
                onUsdChange={setInvestment}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <HalvingInfo
                title="Halving Actual"
                info={currentHalving}
                className="bg-bitcoin-light"
              />
              <HalvingInfo
                title="Halving Jubilación"
                info={retirementHalving}
                className="bg-bitcoin-light"
              />
            </div>
          </div>

          <div className="calc-content rounded-xl bg-[#141418] p-6 shadow-lg">
            <h2 className="calc-text mb-4 text-xl font-semibold text-white">
              Proyecciones de Inversión
            </h2>
            {investment > 0 && <ProjectionTable projections={projections} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;