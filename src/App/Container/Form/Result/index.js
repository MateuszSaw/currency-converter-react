import React from "react";
import { StyledResult } from "./styled"

const Result = ({ result }) => (

<StyledResult border={!!result}>
{!!result && (
  <>
  {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;= {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
  </>
)}
</StyledResult>
);

export default Result;
