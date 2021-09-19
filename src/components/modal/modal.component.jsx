import CustomButton from "../custom-button/custom-button.component";
import {
  ButtonsContainer,
  ModalContainer,
  TextAreaContainer,
} from "./modal.styles";

const Modal = () => (
  <ModalContainer>
    <TextAreaContainer></TextAreaContainer>
    <ButtonsContainer>
      <CustomButton>Закрыть</CustomButton>
      <CustomButton primary>Добавить</CustomButton>
    </ButtonsContainer>
  </ModalContainer>
);

export default Modal;
