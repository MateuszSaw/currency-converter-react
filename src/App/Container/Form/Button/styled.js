import styled from "styled-components";

export const StyledButton = styled.button`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.goldSand};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  transition: ease-out 0.5s;
  margin: 15px;

  &:hover{
    filter: brightness(105%);
  }
  &:focus{
    filter: brightness(110%);
    outline: none;
    transform: scale(1.1);
  }
`;