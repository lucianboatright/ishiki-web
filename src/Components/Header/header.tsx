import React, { useState } from 'react';
import { Burger, HeaderListItem, HeaderWrapper, ListItem, Logo, MenueWrapper, MobileMenu, StyledList } from './header.styles';
import Dropdown from './Dropdown/dropdown';
import logo from '../../assets/ISHIKI logo.jpg'

function formatString(input: string): string {
  return input
    .toLowerCase()
    .replace(/(?:\s+)([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/\s+/g, '');
}


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
    scrollToSection(value)
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderWrapper>
      <Logo><img src={logo} alt="ISHIKI" /></Logo>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Burger>

        <MenueWrapper>
          <Dropdown header="About" dropDownItems={['Bio', 'Our mission', 'Our values', 'Our lenses']} />
          <Dropdown header="Our Portfolio" dropDownItems={['Every drop counts', 'Unifide Fields', 'The Force']} />
          <Dropdown header="Our Team" dropDownItems={['Core team', 'Our collective']} />
          {/* <Dropdown header="Contact" dropDownItems={['Contact']} /> */}
                  <HeaderListItem onClick={onOptionClicked(formatString('Services'))}>Our Offer</HeaderListItem>
          <HeaderListItem onClick={onOptionClicked(formatString('Contact'))}>Contact</HeaderListItem>
        </MenueWrapper>

        {isOpen && (
          <MobileMenu>
            {/* <Dropdown header="About" dropDownItems={[]} /> */}
            <StyledList>

                    <ListItem onClick={onOptionClicked(formatString('Bio'))} key={Math.random()}>
                              Bio
                    </ListItem>
                    <ListItem onClick={onOptionClicked(formatString('Our mission'))} key={Math.random()}>
                    Our mission
                    </ListItem>
                    <ListItem onClick={onOptionClicked(formatString('Our values'))} key={Math.random()}>
                              Our values
                    </ListItem>
                    <ListItem onClick={onOptionClicked(formatString('Our values'))} key={Math.random()}>
                              Our values
                    </ListItem>
            </StyledList>
            <Dropdown header="Work" dropDownItems={['Every drop counts', 'Unifide Fields', 'The Force']} />
                    <ListItem onClick={onOptionClicked(formatString('Every drop counts'))} key={Math.random()}>
                              Every drop counts
                    </ListItem>
                    <ListItem onClick={onOptionClicked(formatString('Unifide Fields'))} key={Math.random()}>
                    Unifide Fields
                    </ListItem>
                    <ListItem onClick={onOptionClicked(formatString('The Force'))} key={Math.random()}>
                              The Force
                    </ListItem>
            <Dropdown header="Team" dropDownItems={['Core team', 'Our collective']} />
                    <ListItem onClick={onOptionClicked(formatString('Core team'))} key={Math.random()}>
                              Core team
                    </ListItem>
                    <ListItem onClick={onOptionClicked(formatString('Our collective'))} key={Math.random()}>
                    Our collective
                    </ListItem>
          </MobileMenu>
        )}
    </HeaderWrapper>
  );
};

export default Header;
