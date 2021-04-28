import React, { useState } from "react";
import Container from './Container';
import Form from "./Container/Form";
import Header from "./Container/Header";
import Clock from "./Container/Clock";
import { useRatesData } from "./useRatesData";
import { ResultContext } from "./Context/ResultContext";


function App() {
  const [result, setResult] = useState();
  const ratesData = useRatesData()

  const calculateResult = (amount, currency) => {
    const rate = ratesData.currencies[currency];
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency
    });

  }
  return (
    <Container>
      <Clock />
      <Header title="Przelicznik walut"/>
      <ResultContext.Provider value={{result}}>
      <Form
        calculateResult={calculateResult}
        ratesData={ratesData}
      />
      </ResultContext.Provider>
    </Container>
  );
}

export default App;