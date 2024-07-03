import styled from "styled-components";

export const WrapperInput = styled.div`
  border: 1px solid #8A94A4;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7.29px;
  gap: 10.94px;
  background-color: #fff;

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: #fff;

    &::placeholder{
      font-weight: 400;

    }
  }
`;