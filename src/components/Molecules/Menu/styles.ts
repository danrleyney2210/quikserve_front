import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${props => props.theme.primary['800']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 22px;


  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
`;