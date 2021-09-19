import { AddBtnContainer } from "./App.style";
import Header from "./components/header/header.component";
import Modal from "./components/modal/modal.component";
import TodoList from "./components/todo-list/todo-list.component";

function App() {
  return (
    <div>
      <Header />
      {/*
        TodoList -> Todo
      */}
      <TodoList />
      {/*<Modal />*/}
      <AddBtnContainer />
    </div>
  );
}

export default App;
