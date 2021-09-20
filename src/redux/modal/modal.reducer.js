import { ModalActionTypes } from "./modal.types"

const INITIAL_STATE = {
  hidden: true,
  text: ''
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return { ...state, hidden: !state.hidden }
    case ModalActionTypes.SET_MODAL_TEXT:
      return { ...state, text: action.payload }
    default:
      return state
  }
}

export default modalReducer