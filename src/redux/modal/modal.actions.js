import { ModalActionTypes } from "./modal.types";

export const toggleModal = () => ({
  type: ModalActionTypes.TOGGLE_MODAL
})

export const setModalText = (text) => ({
  type: ModalActionTypes.SET_MODAL_TEXT,
  payload: text
})