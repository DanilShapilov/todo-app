import { ModalActionTypes } from "./modal.types"

const INITIAL_STATE = {
  hidden: true,
  text: '',
  id: null
}

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return { ...state, hidden: false }
    case ModalActionTypes.HIDE_MODAL:
      return { ...state, hidden: true, text: '', id: null }
    case ModalActionTypes.SET_MODAL_TEXT:
      return { ...state, text: action.payload }
    case ModalActionTypes.SET_MODAL_TODO:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default modalReducer