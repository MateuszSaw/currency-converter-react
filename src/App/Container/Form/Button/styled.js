import styled from "styled-components";

export const StyledButton = styled.button`
  width: 50%;
  background-color: hsl(36, 65%, 70%);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  transition: ease-out 0.5s;
  margin: 15px;

  &:hover{
    background-color: hsl(36, 55%, 60%);
  }
  &:focus{
    background-color: hsl(36, 45%, 50%);
    outline: none;
    transform: scale(1.1);
  }
`;