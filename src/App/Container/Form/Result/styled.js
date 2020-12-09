import styled, { css }from "styled-components";

export const Wrapper = styled.strong`
  font-size: 25px;
  font: normal;
  color:  ${({ theme }) => theme.colors.goldSand};

  ${({border}) => border && css`
    border-bottom: 1px solid ${({ theme }) => theme.colors.goldSand};
  `}
`;

