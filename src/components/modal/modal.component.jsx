import React from "react";
import { connect } from "react-redux";
import { setModalText, hideModal } from "../../redux/modal/modal.actions";
import { addTodo, updateTodo } from "../../redux/todos/todos.actions";
import CustomButton from "../custom-button/custom-button.component";
import {
  ButtonsContainer,
  ModalContainer,
  TextAreaContainer,
} from "./modal.styles";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleChange(e) {
    const { setModalText } = this.props;
    setModalText(e.target.value);
  }

  addOrUpdateTodo() {
    const { text, id, addTodo, updateTodo, hideModal } = this.props;

    if (text.trim() === "") {
      return;
    }
    if (id) {
      updateTodo({ id, text });
    } else {
      addTodo(text);
    }
    hideModal();
  }

  render() {
    const { text, hideModal, isEditMode } = this.props;
    return (
      <ModalContainer>
        <TextAreaContainer
          onChange={(e) => this.handleChange(e)}
          value={text}
          autoFocus
        ></TextAreaContainer>
        <ButtonsContainer>
          <CustomButton onClick={() => hideModal()}>Закрыть</CustomButton>
          <CustomButton primary onClick={() => this.addOrUpdateTodo()}>
            {isEditMode ? "Сохранить" : "Добавить"}
          </CustomButton>
        </ButtonsContainer>
      </ModalContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.modal.text,
  id: state.modal.id,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  setModalText: (text) => dispatch(setModalText(text)),
  addTodo: (text) => dispatch(addTodo(text)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
