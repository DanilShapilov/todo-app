import { TodosActionTypes } from "./todos.types";

export const addTodo = (todo) => ({
  type: TodosActionTypes.ADD_TODO,
  payload: todo
})

export const removeTodo = (id) => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: id
})

export const updateTodo = ({ id, newText }) => ({
  type: TodosActionTypes.UPDATE_TODO,
  payload: { id, newText }
})