import styled from "styled-components";

export const WrapperInputRadio = styled.div`
  width: 100%;
  label {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    
    strong {
      font-weight: 500;
      color: #121212;
      font-size: 16px;
    }

    > div {
      span {
        display: block;
        font-weight: 400;
        color: #464646;
        font-size: 16px;
      }
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked ~ span.btn-radio:after {
      transform: translate(-50%, -50%) scale(1);
    }

    .btn-radio {
      position: relative;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid ${props => props.theme.primary['800']};
    }

    .btn-radio:after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${props => props.theme.primary['800']};
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      display: block;
      transition: 300 ease-in-out 0s;
    }
  }

  
`;