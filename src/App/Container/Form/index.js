import React, { useState } from "react";
import "./style.css";
import Button from "./Button";
import Result from "./Result";

const Form = ({ currencies, calculateResult, result })=> {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }
  return (
  <form
    className="form"
    onSubmit={onFormSubmit}
  >
  <p>
    <label>
      <span className="form__labelText">Kwota w zł:</span>
      <input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        className="form__field"
        type="number"
        placeholder="Kwota"
        step="0.01"
        required
      />
    </label>
  </p>
  <p>
    <label>
    <span className="form__labelText">Waluta:</span>
      <select
        value = {currency}
        onChange ={({target}) => setCurrency(target.value)}
        className="form__field">
          {currencies = currencies.map(currency => (
            <option
              key={currency.shortName}
              value={currency.shortName}
            >
              {currency.name}
            </option>
          ))};
      </select>
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