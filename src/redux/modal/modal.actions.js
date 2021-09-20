import { ModalActionTypes } from "./modal.types";

export const showModal = () => ({
  type: ModalActionTypes.SHOW_MODAL
})

export const hideModal = () => ({
  type: ModalActionTypes.HIDE_MODAL
})

export const setModalText = (text) => ({
  type: ModalActionTypes.SET_MODAL_TEXT,
  payload: text
})

export const setModalTodo = (id, text) => ({
  type: ModalActionTypes.SET_MODAL_TODO,
  payload: { id, text }
})