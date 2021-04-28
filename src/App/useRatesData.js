import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    currencies: "",
    date: "",
    loading: true,
    error: false
  });

  useEffect(() => {
    setTimeout(() => {
      const url = "https://api.exchangerate.host/latest?base=PLN";
    axios.get(url)
      .then(response => setRatesData({
        date: response.data.date,
        currencies: response.data.rates,
        loading: false
      }))
      .catch((error) => {
        console.error(error.message);
        setRatesData(({
          error: true,
        }))
      });
    },1000)
  }, []);

  return ratesData;
};