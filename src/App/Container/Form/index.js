import React, { useState } from "react";
import Button from "./Button";
import Result from "./Result";
import { LabelText, FormField, Loading, Error} from "./styled"

const Form = ({ calculateResult, ratesData })=> {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  }
  return(
    ratesData.loading ?
      <Loading>
        Proszę czekać trwa pobieranie aktualnych kursów walut<br />
        z Europejskiego Banku Centralnego.
      </Loading>
    :(
    ratesData.error ?
      <Error>
        Coś poszło nie tak, sprawdź połączenie z internetem<br />
        lub spróbuj ponownie później.
      </Error>
      :(
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
                {Object.keys(ratesData.currencies).map(currency => (
                  <option
                    key={currency}
                  >
                    {currency}
                  </option>
                ))};
                </FormField>
            </label>
          </p>
        <Button />
          <p>
            Kursy walut pobierane są z Europoejskiego Banku Centalnego.<br />
            aktualne na dzień: <strong>{ratesData.date}</strong>
          </p>
        <p>
         <Result/>
        </p>
      </form>
      )
    )
  );

};
export default Form;