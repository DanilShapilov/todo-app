import Todo from "../todo/todo.component";
import { TodoListContainer } from "./todo-list.styles";

const TodoList = () => (
  <TodoListContainer>
    <Todo />
    <Todo />
  </TodoListContainer>
);

export default TodoList;
