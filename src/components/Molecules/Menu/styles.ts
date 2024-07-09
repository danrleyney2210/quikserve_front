import styled from "styled-components";

export const Wrapper = styled.div`
  
  width: 100%;
  height: 52px;
  background-color: ${props => props.theme.primary['800']};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 22px;

  nav {
    display: flex;
    align-items: center;

    
    a { 
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 232px;
        text-transform: uppercase;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-decoration: none;
      }

      a.active {
        border-bottom: 5px solid #fff;
      }

  }

  .content-mobile {
    display: none;
  }


  .menu-hamburguer {
    display: none;
  }


  @media (max-width: 858px) {
    height: 64px;
    
    .menu-hamburguer {
      display: block;

      img {
        cursor: pointer;
      }
    }

    .content-mobile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;


      p {
        font-size: 18px;
        font-weight: 500;
        color: #fff;
      }
    }

    nav {
      display: none;
    }
  }

`;

type Tprops = {
  isActive: boolean
}


export const MobileMenu = styled.div<Tprops>`
  width: 60vw;
  height: 100vh;
  position: fixed;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.primary['800']};
  transition: all 0.5;
  transform: ${props => props.isActive ? `translateX(0)` : `translateX(100%)`};


  img {
    margin-top: 24px;
    margin-left: 24px;
    cursor: pointer;
  }


  nav {
    display: flex;
    flex-direction: column;
    padding: 0px 24px;
    gap: 10px;
    margin-top: 40px;

    a {
      width: fit-content;
    }
  }

`;