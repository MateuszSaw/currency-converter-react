import styled, { css }from "styled-components";

export const StyledResult = styled.strong`
  font-size: 25px;
  font: normal;
  color:  hsl(36, 45%, 50%);

  ${({border}) => border && css`
    border-bottom: 1px solid rgb(228, 188, 127);
  `}
`;