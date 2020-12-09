import styled from "styled-components";

export const LabelText = styled.span`
  width: 100px;
  display: inline-block;
  text-align: left;
  margin: 10px;

@media(max-width: ${({ theme }) => theme.media.mobileMax}px){
    text-align: unset;
  }
`;

export const FormField = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  border: 2px solid ${({ theme }) => theme.colors.goldSand};
  border-radius: 10px;
  outline: none;
`;

export const Loading = styled.p`
  font-size: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.goldSand};
  line-height: 2;
  padding: 5px;
`;

export const Error = styled(Loading)`
  color: red;
`;