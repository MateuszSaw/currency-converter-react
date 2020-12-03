import React, { useState } from "react";
import Button from "./Button";
import Result from "./Result";
import { LabelText, FormField } from "./styled"

const Form = ({ currencies, calculateResult, result })=> {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }
  return (
  <form onSubmit={onFormSubmit}>
  <p>
    <label>
      <LabelText>Kwota w zł:</LabelText>
      <FormField
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        type="number"
        placeholder="Kwota"
        step="0.01"
        required
      />
    </label>
  </p>
  <p>
    <label>
    <LabelText>Waluta:</LabelText>
      <FormField
        as="select"
        value = {currency}
        onChange ={({target}) => setCurrency(target.value)}
      >
        {currencies = currencies.map(currency => (
          <option
            key={currency.shortName}
            value={currency.shortName}
          >
            {currency.name}
          </option>
          ))};
      </FormField>
    </label>
  </p>
  <Button />
  <p>
    <Result
     result={result}
    />
  </p>
</form>
);
};


export default Form;