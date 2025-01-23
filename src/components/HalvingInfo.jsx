export const HalvingInfo = ({ title, info, className = "" }) => {
    // Si no hay información válida o el año es 0, mostrar valores en cero
    if (!info.year) {
      return (
        <div className={`calc-content rounded-lg border border-black p-4 ${className}`}>
          <h3 className="calc-text mb-2 text-lg font-semibold text-white">{title}</h3>
          <div className="space-y-2 text-sm">
            <div className="calc-text flex justify-between">
              <span className="calc-text text-white">Halving #</span>
              <span className="font-medium text-white">0</span>
            </div>
            <div className="flex justify-between">
              <span className="calc-text text-white">Año</span>
              <span className="font-medium calc-text text-white">0</span>
            </div>
            <div className="flex justify-between">
              <span className="calc-text text-white">Recompensa por Bloque</span>
              <span className="calc-text text-white font-medium">0 BTC</span>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className={`calc-content rounded-lg border border-black p-4 ${className}`}>
        <h3 className="calc-text text-white mb-2 text-lg font-semibold">{title}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="calc-text text-white">Halving #</span>
            <span className="calc-text text-white font-medium">{info.number}</span>
          </div>
          <div className="flex justify-between">
            <span className="calc-text text-white">Año</span>
            <span className="calc-text text-white font-medium">{info.year}</span>
          </div>
          <div className="flex justify-between">
            <span className="calc-text text-white">Recompensa por Bloque</span>
            <span className="calc-text text-white font-medium">{info.blockReward} BTC</span>
          </div>
        </div>
      </div>
    );
  };