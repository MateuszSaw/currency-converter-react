import React, { useState } from "react";
import Container from './Container';
import Form from "./Container/Form";
import Header from "./Container/Header";
import Clock from "./Container/Clock";
import { currencies } from "./currencies";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies
    .find(({ shortName }) => shortName === currency)
    .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency
    });

  }
  return (
    <Container>
      <Clock />
      <Header title="Przelicznik walut"/>
      <Form
      currencies={currencies}
      calculateResult={calculateResult}
      result = {result}
      />
    </Container>
  );
}

export default App;