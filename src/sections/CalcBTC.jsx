import { useState, useEffect } from "react";
import { BTCPriceDisplay } from "../components/common/BTCPriceDisplay";
import { HalvingInfo } from "../components/common/HalvingInfo";
import { InvestmentInputs } from "../components/common/InvestmentInputs";
import { ProjectionTable } from "../components/common/ProjectionTable";
import Modal from "../components/common/Modal";
import { Info } from "lucide-react";
import {
  getCurrentHalvingInfo,
  calculateRetirementHalving,
  generateHalvingTable,
} from "../utils/bitcoinCalculations";

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
    <div
      id="calcBTC"
      className="min-h-screen mt-1 mb-5 bg-[#141418] p-4 md:p-8"
    >
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
                aria-label="Abrir información sobre la calculadora"
              >
                <Info className="h-4 w-4 text-white" />
              </button>
            </div>

            <Modal
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />

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