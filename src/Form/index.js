import React from "react";
import "./style.css";
import Button from "./Button";
import Result from "./Result";

const Form = ()=> (
  <form className="form">
      <p>
        <label>
          <span className="form__labelText">Kwota w zł:</span>
          <input
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
          <select className="form__field">
            <option value="EUR">Euro</option>
            <option value="GBP">Funt brytyjski</option>
            <option value="USD">Dolar amerykański</option>
          </select>
        </label>
      </p>
      <Button />
      <p>
        <Result />
      </p>
    </form>
);

export default Form;