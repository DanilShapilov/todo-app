import React from "react";
import { connect } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  updateTodo,
} from "../../redux/todos/todos.actions";
import Todo from "../todo/todo.component";
import { setModalTodo, showModal } from "../../redux/modal/modal.actions";

import { TodoListContainer } from "./todo-list.styles";

class TodoList extends React.Component {
  toggleOrUpdateHandler(id, text) {
    const { toggleTodo, isEditMode, showModal, setModalTodo } = this.props;
    if (isEditMode) {
      console.log(id, text);
      setModalTodo(id, text);
      showModal();
    } else {
      toggleTodo(id);
    }
  }

  removeHandler(e, id) {
    const { removeTodo, isEditMode } = this.props;
    if (isEditMode) {
      e.stopPropagation();
      removeTodo(id);
    }
  }

  render() {
    const { todos, isEditMode } = this.props;
    return (
      <TodoListContainer>
        {todos.length > 0
          ? todos.map((todo) => (
              <Todo
                key={todo.id}
                {...todo}
                isEditMode={isEditMode}
                toggleOrUpdateHandler={() =>
                  this.toggleOrUpdateHandler(todo.id, todo.text)
                }
                removeHandler={(e) => this.removeHandler(e, todo.id)}
              />
            ))
          : "Список задач пуст"}
      </TodoListContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  updateTodo: (id, text) => dispatch(updateTodo({ id, text })),

  showModal: () => dispatch(showModal()),
  setModalTodo: (id, text) => dispatch(setModalTodo(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
