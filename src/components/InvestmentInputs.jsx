import { calculateBTCAmount } from "../utils/bitcoinCalculations";

export const InvestmentInputs = ({ usdAmount, btcPrice, onUsdChange }) => {
  const handleUsdChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    onUsdChange(value);
  };

  const btcAmount = calculateBTCAmount(usdAmount, btcPrice);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <span className="calc-text z-10 text-white absolute left-3 top-1/2 -translate-y-1/2">
          $
        </span>
        <input
          type="number"
          value={usdAmount || ""}
          onChange={handleUsdChange}
          className="calc-content w-full text-white rounded-lg border border-black bg-[#141418] backdrop-blur-[10px] p-2 pl-8"
          placeholder="Ingrese cantidad en USD"
        />
      </div>
      <div className="relative">
        <span className="calc-text text-white z-10 absolute left-3 top-1/2 -translate-y-1/2">
          ₿
        </span>
        <input
          type="text"
          value={btcAmount.toFixed(8)}
          readOnly
          className="calc-content w-full text-white rounded-lg border border-black bg-[#141418] p-2 pl-8"
        />
      </div>
    </div>
  );
};