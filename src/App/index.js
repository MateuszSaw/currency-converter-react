import React, { useState } from "react";
import Container from './Container';
import Form from "./Container/Form";
import Header from "./Container/Header";
import Clock from "./Container/Clock";
import ResultProvider from "./Context/ResultContext";

function App() {
  return (
    <Container>
      <Clock />
      <Header title="Przelicznik walut"/>
        <ResultProvider>
          <Form />
      </ResultProvider>
    </Container>
  );
}

export default App;