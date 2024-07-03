import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  background-color: ${props => props.theme.primary['800']};
  display: flex;
  justify-content: space-between;
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

`;