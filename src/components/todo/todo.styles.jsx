import styled, { css } from "styled-components";

export const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const indicationDoneStyles = css`
  &:after {
    content: "";
    width: 12px;
    height: 12px;
    background-color: #23a3ff;
    display: block;
    border-radius: 50%;
  }
`;

const indicationDeleteStyles = css`
  background-color: #e85c5c;
  border: none;
  &:after {
    content: "";
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background-color: #fff;
    display: block;
  }
`;

const getIndicationStyles = (props) => {
  if (props.isEditMode) {
    return indicationDeleteStyles;
  }
  if (props.isDone) {
    return indicationDoneStyles;
  }
};

export const IndicationContainer = styled.div`
  width: 22px;
  height: 22px;
  margin-right: 14px;
  border: 2px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  ${getIndicationStyles}
`;

const getTextStyles = (props) => {
  if (props.isDone) {
    return "color: rgba(0, 0, 0, 0.6);";
  }
};

export const TextContainer = styled.div`
  ${getTextStyles}
`;
