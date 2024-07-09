import styled from "styled-components";

export const Content = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }

  > div {
    margin-top: 10px;
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    input {
      border-radius: 4px;
      height: 35px;
      outline: none;
      border: none;
      padding: 6px;
    }

    button {
      margin-top: 10px;
    }
  }

`;