import React from "react";
import "./style.css"

const Result = ({ result }) => (

<strong className={`result ${!!result ? "result--border": ""}`}>
{!!result && (
  <>
  {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;= {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
  </>
)}
</strong>
);

export default Result;
