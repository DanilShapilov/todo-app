import { connect } from "react-redux";
import { toggleEditMode } from "../../redux/app/app.actions";
import { hideModal } from "../../redux/modal/modal.actions";
import CustomButton from "../custom-button/custom-button.component";
import { HeaderContainer } from "./header.styles";

const Header = ({ isEditMode, toggleEditMode, hideModal }) => (
  <HeaderContainer>
    <h1>Сегодня</h1>
    <CustomButton
      onClick={() => {
        toggleEditMode();
        hideModal();
      }}
      small
    >
      {isEditMode ? "Отменить" : "Править"}
    </CustomButton>
  </HeaderContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleEditMode: () => dispatch(toggleEditMode()),
  hideModal: () => dispatch(hideModal()),
});

export default connect(null, mapDispatchToProps)(Header);
