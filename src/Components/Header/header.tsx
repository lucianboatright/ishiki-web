import React from 'react';
import { HeaderWrapper, Logo, MenueWrapper } from './header.styles';
import Dropdown from './Dropdown/dropdown';
import logo from '../../assets/ISHIKI logo.jpg'

const Header: React.FC = () => {

  return (
    <HeaderWrapper>
        <MenueWrapper>
        <Logo><img src={logo} alt={'ISHIKI'} /></Logo>
          <Dropdown header={'About'} dropDownItems={['Bio', 'Our mission', 'Our values', 'Our lenses']}/>
          <Dropdown header={'Work'} dropDownItems={['Every drop counts', 'Unifide Fields', 'The Force']}/>
          <Dropdown header={'Team'} dropDownItems={['Core team', 'Our collective']}/>
          <Dropdown header={'Contact'} dropDownItems={['Contact']}/>
        </MenueWrapper>
    </HeaderWrapper>
  );
};

export default Header;
