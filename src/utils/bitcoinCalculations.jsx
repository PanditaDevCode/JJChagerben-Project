export const calculateBTCAmount = (usdAmount, btcPrice) => {
    return usdAmount / btcPrice;
  };
  
  export const getCurrentHalvingInfo = () => {
    const startYear = 2009;
    const startingBlock = 50;
    const halvingNumber = 5; // Halving actual (2024)
    const currentBlockReward = startingBlock / Math.pow(2, halvingNumber - 1);
  
    return {
      number: halvingNumber,
      year: 2024,
      blockReward: currentBlockReward,
    };
  };
  
  export const calculateRetirementHalving = (investmentAmount) => {
    if (!investmentAmount) {
      return {
        number: 0,
        year: 0,
        blockReward: 0,
      };
    }
  
    const currentYear = new Date().getFullYear();
    let yearsToAdd;
  
    if (investmentAmount <= 100) {
      yearsToAdd = 40;
    } else if (investmentAmount <= 4999) {
      yearsToAdd = 30;
    } else if (investmentAmount <= 9999) {
      yearsToAdd = 20;
    } else {
      yearsToAdd = 10;
    }
  
    const targetYear = currentYear + yearsToAdd;
    const startYear = 2009;
    const yearsSinceStart = targetYear - startYear;
    const halvingNumber = Math.floor(yearsSinceStart / 4) + 1;
    const startingBlock = 50;
    const blockReward = startingBlock / Math.pow(2, halvingNumber - 1);
  
    return {
      number: halvingNumber,
      year: targetYear,
      blockReward: blockReward,
    };
  };
  
  export const calculatePBTC = (
    initialReward,
    productionCost,
    numberOfHalvings,
    finalReward
  ) => {
    return ((initialReward * productionCost) * Math.pow(2, numberOfHalvings)) / finalReward;
  };
  
  export const generateHalvingTable = (investmentAmount, currentBTCPrice) => {
    if (!investmentAmount) return [];
    
    const currentYear = new Date().getFullYear();
    const initialBTC = calculateBTCAmount(investmentAmount, currentBTCPrice);
    // Siempre mostrar 10 halvings futuros (40 años)
    const numberOfHalvings = 10;
  
    const table = [];
  
    for (let i = 0; i <= numberOfHalvings; i++) {
      const year = currentYear + i * 4;
      const numberOfHalvingsPassed = i;
      const projectedPrice = currentBTCPrice * Math.pow(2, numberOfHalvingsPassed);
      const projectedValue = initialBTC * projectedPrice;
  
      table.push({
        year,
        pbtc: projectedPrice,
        investment: projectedValue,
      });
    }
  
    return table;
  };