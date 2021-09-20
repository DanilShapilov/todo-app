import { TodosActionTypes } from "./todos.types";

export const addTodo = (text) => ({
  type: TodosActionTypes.ADD_TODO,
  payload: text
})

export const removeTodo = (id) => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: { id }
})

export const updateTodo = ({ id, text }) => ({
  type: TodosActionTypes.UPDATE_TODO,
  payload: { id, text }
})

export const toggleTodo = (id) => ({
  type: TodosActionTypes.TOGGLE_TODO,
  payload: { id }
})