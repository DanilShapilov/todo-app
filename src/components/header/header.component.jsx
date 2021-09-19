import CustomButton from "../custom-button/custom-button.component";
import { HeaderContainer } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <h1>Сегодня</h1>
    <CustomButton small>Править</CustomButton>
  </HeaderContainer>
);

export default Header;
