import { AppActionTypes } from "./app.types"

const INITIAL_STATE = {
  isEditMode: false
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.TOGGLE_EDIT_MODE:
      return { ...state, isEditMode: !state.isEditMode }
    default:
      return state
  }
}

export default appReducer