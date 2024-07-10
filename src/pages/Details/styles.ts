import styled from "styled-components";

export const Wrapper = styled.div``;

export const ContentItem = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;

  .content-img {
    position: relative;

    img {
      width: 100%;
    }

    .btn-close {
      cursor: pointer;
      top: 48px;
      right: 16px;
      position: absolute;
      height: 28px;
      width: 28px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 12px;
        height: 12px;
      }
    }
  }

  .description {
    background-color: #fff;
    header {
      padding: 16px;

      h3 {
        font-size: 24px;
        font-weight: 700;
        color: #121212;
        margin-bottom: 8px;
      }

      p {
        font-size: 16px;
        font-weight: 400;
        color: #464646;
      }
    }

    .choose {
      background-color: #F8F9FA;
      padding: 16px 24px;
      

      strong {
        color: #464646;
        font-weight: 700;
        font-size: 16px;
      }

      span {
        display: block;
        font-weight: 400;
        color: #5F5F5F;
      }
    }

    .type {
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >div {
        display: flex;
        flex-direction: column;
        
        strong {
          font-weight: 500;
          color: #121212;
          font-size: 16px;
        }

        span {
          display: block;
          font-weight: 400;
          color: #464646;
          font-size: 16px;
        }
      }
    }

    .quantity {
     
      padding: 16px;
      display : flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;
      width: 100%;

      .buttons {
        display: flex;
        align-items: center;
        gap: 16px;


        button {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          border: none;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center ;
        }

        .less{
          background-color: #DADADA;
        }

        .plus {
          background-color: #4F372F;
        }
      }
    }
  }

`;
