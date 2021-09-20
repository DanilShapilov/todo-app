import {
  IndicationContainer,
  TextContainer,
  TodoContainer,
} from "./todo.styles";

const Todo = ({
  text,
  isDone,
  isEditMode,
  toggleOrUpdateHandler,
  removeHandler,
}) => (
  <TodoContainer onClick={toggleOrUpdateHandler}>
    <IndicationContainer
      onClick={removeHandler}
      isDone={isDone}
      isEditMode={isEditMode}
    />
    <TextContainer isDone={isDone}>{text}</TextContainer>
  </TodoContainer>
);

export default Todo;
