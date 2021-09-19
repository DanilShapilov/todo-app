import { CustomButtonContainer } from "./custom-button.styles";
import { ReactComponent as AddIcon } from "./add.svg";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>
    {!props.isAddBtn ? children : <AddIcon />}
  </CustomButtonContainer>
);

export default CustomButton;
