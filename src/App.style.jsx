import styled from "styled-components";
import CustomButton from "./components/custom-button/custom-button.component";

const addBtnAttrs = {
  isAddBtn: true,
};

export const AddBtnContainer = styled(CustomButton).attrs(addBtnAttrs)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 5;
`;
