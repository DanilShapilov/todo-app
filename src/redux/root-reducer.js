import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import modalReducer from "./modal/modal.reducer";
import todosReducer from "./todos/todos.reducer";
import appReducer from "./app/app.reducer";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos']
}


const rootReducer = combineReducers({
  todos: todosReducer,
  modal: modalReducer,
  app: appReducer
})

export default persistReducer(persistConfig, rootReducer)