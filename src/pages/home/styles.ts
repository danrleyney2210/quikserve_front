import styled from "styled-components";

export const Wrapper = styled.div`
  
`;


export const Header = styled.header`
  width: 100%;

  img,svg {
    width: 100%;
  }
`;

export const WrapperMain = styled.div`
  width: 100%;

  @media (max-width: 1024px){
    background-color: #fff;
  }
  
`;




export const MenuTab = styled.div`
  display: flex;
  margin-top: 36px;

  .category { 
    max-width: 104px;
    width: 100%;
    padding: 0px 11px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .icon {
      width: 82px ;
      height: 82px;
      border-radius: 50%;

      img, svg {
        width: 82px !important;
        height: 82px;
        width: fit-content;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;

      }
    }

    a {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      color: #121212;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }

    a.active {
      border-bottom: 2px solid #4F372F;
    }
  }
`;


export const MenuGategory = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  cursor: pointer;
  max-width: 104px;
  width: 100%;
  padding: 0px 11px ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .icon {
    width: 95px;
    height: 95px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    border: ${props => props.isActive ? `3px solid ${props.theme.primary['800']}` : 'none'};

    img, svg {
      width: 82px !important;
      height: 82px !important;
      width: fit-content;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;

    }
  }

    p {
      width: 100%;
      font-size: 16px;
      font-weight: ${props => props.isActive ? 600 : 400};
      color: #121212;
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      border-bottom: ${props => props.isActive ? `2px solid ${props.theme.primary['800']}` : 'none'};
    }
`;


export const ContentSearch = styled.div`
  padding-top: 11px;

  


  @media (max-width: 1055px) {
    
    padding: 16px;
  }
`;


export const Body = styled.div`
  display: flex;
  gap: 24px;

  background-color: #F8F9FA;
  padding: 32px 40px;
  margin-top: 6px;

  @media (max-width: 890px) {
    padding: 0px;
    margin-top: 0px;
  }
`;

export const Cart = styled.div`
  max-width: 320px;
  width: 100%;
  background-color: #fff;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
  


  header {
    background-color: #F8F9FA;
    height: 64px;
    width: 100%;
    padding: 22px 24px;


    h1 {
      font-size: 24px;
      font-weight: 500;
      color: #464646;
    }
  }

  .content-text {
      padding: 24px;

      p {
        font-size: 16px;
        font-weight: 400;
        color: #464646;
      }
  }

  .itens {
    background-color: #F8F9FA;

    .itens-selected {
      background-color: #fff;
      display: flex;
      flex-direction: column;
    }
    
   
  

    .item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 8px;

      .description {
        display: flex;
        flex-direction: column;
        padding: 0px;

        small {
          color: #5F5F5F;
          font-weight: 400;
          margin-bottom: 4px;
        }

        .content-btn {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px;

          button {
            cursor: pointer;
            height: 20px;
            width: 20px;
            background-color: #4f372f;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }


      }

      strong {
        font-weight: 500px;
        font-size: 16px;
        color: #121212;
      }
    
    }


    div {
      padding: 16px;
      display: flex;
      justify-content: space-between;

      
    }

    .sub-total {
      border-bottom: 1px solid #d1d2d3;

      p {
        font-size: 16px;
        font-weight: 400;
        color: #121212;
      }

      strong {
        font-weight: 500;
        color: #121212;
      }
    }

    .total {
      p {
        font-size: 24px;
        font-weight: 300;
        color: #121212;
      }

      strong {
        font-size: 24px;
        font-weight: 500;
        color: #121212;
      }
    }
  }


  @media (max-width: 850px) {
    display: none;
  }
`;


export const Content = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 890px) {
    box-shadow: none;

  }
`;


export const ContentItens = styled.div``;

export const TitleItem = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #121212;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 16px 12px 16px;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;

  .description {
    width: 100%;

    strong {
      font-size: 16px;
      font-weight: 500;
      font-family: Roboto;
      margin-bottom: 6px;
    }

    p {
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 6px;
      width: 170px;
      height: 40px;
      
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #464646;
      line-height: 18.75px;
      
    }

    .price {
      color: #464646;
    }
  }

  .img {
    width: 128px;
    height: 85px;
    border-radius: 6px;
    background-color: #ccc;

    img, svg {
      width: 128px;
      height: 85px;
      border-radius: 6px;
    }
  }
`;


export const ModalDetailsItem = styled.div`
  max-width: 480px;
  width: 100%;

  .content-img {
    height: 320px;

    img {
      width: 100%;

    }
  }

  .description {
 

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


export const Footer = styled.footer`
  width: 100%;
  justify-content: center;
  padding: 24px;
  text-align: center;


  a {
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.primary['800']};
  }
`;


export const ContentBasket = styled.div`
  position: fixed;
  bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
`


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


export const NotImage = styled.div`
  width: 100%;
  height: 265px;
  background-color: #ccc;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #333;
    font-weight: 600;
  }
`;



