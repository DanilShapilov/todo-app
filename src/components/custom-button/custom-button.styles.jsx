import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: #f2f2f2;
  color: #4d4d4d;
  border: none;
`;

const primaryButtonStyles = css`
  background-color: #23a3ff;
  color: #fff;
  border: none;
`;

const buttonSmall = css`
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 4px;
`;

const buttonRegularSize = css`
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 37px;
`;

const addBtnStyles = css`
  width: 60px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
`;

const getButtonStyles = (props) => {
  if (props.isAddBtn) {
    return addBtnStyles;
  }
  return props.primary ? primaryButtonStyles : buttonStyles;
};

const getButtonSize = (props) => {
  if (props.isAddBtn) {
    return "";
  }
  return props.small ? buttonSmall : buttonRegularSize;
};

export const CustomButtonContainer = styled.button`
  font-weight: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.01em;
  padding: 0;

  ${getButtonStyles}
  ${getButtonSize}
`;
