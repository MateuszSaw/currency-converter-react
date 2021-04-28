import React, { useContext } from "react";
import { ResultContext } from "../../../Context/ResultContext";
import { Wrapper } from "./styled"

const Result = () => {
  const { result } = useContext(ResultContext);

  return (
    <Wrapper border={!!result}>
      {!!result && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;= {result.targetAmount.toFixed(2)}&nbsp;{result.currency}&nbsp;
        </>
      )}
    </Wrapper>
  );
};

export default Result;
