import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: hsla(0, 0%, 100%, 0.95);
  flex-basis: 700px;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 0 15px 10px ${({ theme }) => theme.colors.goldSand};
  border-radius: 10px;
  text-align: center;
`;