import styled, { keyframes } from "styled-components";

const showModalAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: rotate(0%);
  }
`;

export const ModalContainer = styled.div`
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 132px;
  background-color: #fff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
  border-radius: 40px 40px 0px 0px;
  padding: 42px 40px;
  animation: ${showModalAnimation} 0.3s ease-in-out;
`;

export const TextAreaContainer = styled.textarea`
  width: 100%;
  height: 160px;
  resize: none;
  border: 2px solid #e6e6e6;
  padding: 20px;
  outline: none;
  border-radius: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;
