import styled from "styled-components";

export const LabelText = styled.span`
  width: 100px;
  display: inline-block;
  text-align: left;
  margin: 10px;

  @media(max-width: 767px){
    text-align: unset;
  }
`;

export const FormField = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  border: 2px solid rgb(228, 188, 127);
  border-radius: 10px;
  outline: none;
`;