import { connect } from "react-redux";
import { AddBtnContainer } from "./App.style";
import Header from "./components/header/header.component";
import Modal from "./components/modal/modal.component";
import TodoList from "./components/todo-list/todo-list.component";

import { showModal } from "./redux/modal/modal.actions";

function App({ showModal, isModalHidden, app }) {
  return (
    <div>
      <Header isEditMode={app.isEditMode} />

      <TodoList isEditMode={app.isEditMode} />
      {
        !isModalHidden && <Modal isEditMode={app.isEditMode} />
      }
      {!app.isEditMode && <AddBtnContainer onClick={showModal} />}

    </div>
  );
}

const mapStateToProps = state => ({
  isModalHidden: state.modal.hidden,
  app: state.app,
})

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
