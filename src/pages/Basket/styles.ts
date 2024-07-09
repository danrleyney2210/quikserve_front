import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  padding-bottom: 100px;
  header {

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px;
    border-bottom: 1px solid #ccc;

    p {
      font-size: 18px;
      color: #121212;
      font-weight: 500;
    }
  }

`;


export const Item = styled.div`
  padding: 16px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;


    p {
      font-size: 16px;
      font-weight: 400;
      color: #121212;
    }

    strong {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .info {
    p {
      margin-top: 4px;
      font-size: 16px;
      color: #5F5F5F;
      font-weight: 400;
    }

    .content-buttom {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 6px;

      strong {
        font-size: 16px;
        font-weight: 700;
        color: #121212;
      }

      button {
        border: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: ${props => props.theme.primary['800']};
        display: flex;
        justify-content: center;
        align-items: center;

        img, svg {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`;


export const ContentButton = styled.div`
  width: 100%;
  padding: 24px 24px 0px 24px;
  position: fixed;
  bottom: 24px;
`;


export const Total = styled.div`
  
  .subtotal {
    padding: 16px 16px 11px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;

    small {
      font-size: 16px;
      font-weight: 400;
      color: #121212;
    }

    strong {
      font-size: 16px;
      font-weight: 500;
      color: #121212;
    }

  }

  .total {
    padding: 16px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #121212;
    


    p {
      font-size: 24px;
      font-weight: 300;
    }

    strong {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;