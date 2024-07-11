
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vh;
`;


export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-items: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.65;
  }
`;

export const Modal = styled.div`
  max-width: 480px;
  margin: auto;
  width: 100%;
  position: relative;
  background-color: #fff;
  position: relative;

  h1 {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-align: center;
  }

  .btn-close {
    border: none;
    position: absolute;
    background-color: #fff;
    right: 16px;
    top: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    z-index: 1000;
    }
`;



export const OverleayModal = styled.div``;


export const ModalBody = styled.div`
`;
