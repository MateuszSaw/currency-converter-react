import { createContext, useState } from "react";
import { useRatesData } from "../useRatesData";

export const ResultContext = createContext();

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (amount, currency) => {
    const rate = ratesData.currencies[currency];
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency
    });
  };
  return (
    <ResultContext.Provider value={{result, calculateResult}}>{children}</ResultContext.Provider>
  );
};

export default ResultProvider;
