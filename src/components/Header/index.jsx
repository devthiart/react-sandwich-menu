import { StyleHeader, ImgLogo } from './styles';
import Logo from '../../assets/img/logo.svg';
import Menu from '../Menu';

function Header() {
  return(
    <StyleHeader>
      <ImgLogo src={Logo} alt="Sandwich Logo" />
      <Menu />
    </StyleHeader>
  );
}

export default Header;