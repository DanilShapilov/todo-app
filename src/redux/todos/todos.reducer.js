import { TodosActionTypes } from "./todos.types"
import { addTodo, removeTodo } from "./todos.utils"

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
        todos: action.payload
      }
    default:
      return state
  }
}

export default todosReducer