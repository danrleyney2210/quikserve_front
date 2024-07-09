import styled from "styled-components";

export const Button = styled.button<{ isDisabled: boolean }>`
  background-color: ${props => props.isDisabled ? '#ccc' : '#4F372F'};
  width: 100%;
  cursor: pointer;
  color: #fff;
  padding: 13px 0px;
  border-radius: 24px;
  border: none;
`;