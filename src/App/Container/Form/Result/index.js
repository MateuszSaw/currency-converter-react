import React from "react";
import { Wrapper } from "./styled"

const Result = ({ result }) => (
<Wrapper border={!!result}>
{!!result && (
  <>
  {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;= {result.targetAmount.toFixed(2)}&nbsp;{result.currency}&nbsp;
  </>
)}
</Wrapper>

);

export default Result;
