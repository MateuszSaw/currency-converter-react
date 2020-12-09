import React, { useState } from "react";
import Container from './Container';
import Form from "./Container/Form";
import Header from "./Container/Header";
import Clock from "./Container/Clock";
import { useRatesData } from "./useRatesData";


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
      <Form
      calculateResult={calculateResult}
      result={result}
      ratesData={ratesData}
      />
    </Container>
  );
}

export default App;