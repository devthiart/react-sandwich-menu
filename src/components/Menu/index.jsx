import { StyleMenu, ItemMenu, ButtonOpenMenu, ButtonCloseMenu } from './styles';
import ImgOpenMenu from '../../assets/img/menu.svg';
import ImgCloseMenu from '../../assets/img/close.svg';
import { useState } from 'react';

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function _handleActiveMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <>
      <ButtonOpenMenu onClick={_handleActiveMenu}><img src={ImgOpenMenu} alt="Open menu" /></ButtonOpenMenu>
      <StyleMenu activeMenu={toggleMenu}>
        <ButtonCloseMenu onClick={_handleActiveMenu}><img src={ImgCloseMenu} alt="Close menu" /></ButtonCloseMenu>
        <ItemMenu>Item 1</ItemMenu>
        <ItemMenu>Item 2</ItemMenu>
        <ItemMenu>Item 3</ItemMenu>
      </StyleMenu>
    </>
  );
}

export default Menu;