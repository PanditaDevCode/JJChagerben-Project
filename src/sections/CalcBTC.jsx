import { useState, useEffect } from "react";
import { BTCPriceDisplay } from "../components/BTCPriceDisplay";
import { HalvingInfo } from "../components/HalvingInfo";
import { InvestmentInputs } from "../components/InvestmentInputs";
import { ProjectionTable } from "../components/ProjectionTable";
import {
  getCurrentHalvingInfo,
  calculateRetirementHalving,
  generateHalvingTable,
} from "../utils/bitcoinCalculations";

const CalcBTC = () => {
  const [btcPrice, setBtcPrice] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [currentHalving, setCurrentHalving] = useState(getCurrentHalvingInfo());
  const [retirementHalving, setRetirementHalving] = useState({
    number: 0,
    year: 0,
    blockReward: 0,
  });
  const [projections, setProjections] = useState([]);

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
    if (investment > 0 && btcPrice > 0) {
      setRetirementHalving(calculateRetirementHalving(investment));
      setProjections(generateHalvingTable(investment, btcPrice));
    }
  }, [investment, btcPrice]);

  return (
    <div className="min-h-screen mt-1 mb-5 bg-[#141418] p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="calc-text mb-8 text-center text-3xl font-bold text-white">
          Calculadora de Jubilación
        </h1>
        <div className="calc-content calc-text bg-[#1b1b20] text-white p-4 rounded-lg mt-4 mb-10 text-center">
          Estos valores son especulativos de forma estática sobre un modelo
          estático, pueden cambiar si cambian las condiciones de mercado.
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="calc-content space-y-6 rounded-xl bg-[#1b1b20] p-10 shadow-lg">
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

export default CalcBTC;
