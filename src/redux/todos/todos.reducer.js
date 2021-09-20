import { TodosActionTypes } from "./todos.types"
import { addTodo, removeTodo, toggleTodo, updateTodo } from "./todos.utils"

const INITIAL_STATE = {
  todos: []
}

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosActionTypes.ADD_TODO:
      return {
        ...state,
        todos: addTodo(state.todos, action.payload)
      }
    case TodosActionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload)
      }
    case TodosActionTypes.UPDATE_TODO:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload)
      }
    case TodosActionTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload)
      }
    default:
      return state
  }
}

export default todosReducer