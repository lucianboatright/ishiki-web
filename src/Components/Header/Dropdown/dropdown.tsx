import React, { useState } from 'react'
import { DropDownContainer, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './dropdown.styles';

interface DropdownProps {
    dropDownItems: string[];
    header: string;
}

function formatString(input: string): string {
  return input
    .toLowerCase()
    .replace(/(?:\s+)([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/\s+/g, '');
}

const Dropdown: React.FC<DropdownProps> = ({ dropDownItems, header }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenHover, setIsOpenHover] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const toggling = () => setIsOpen(!isOpen);
    
    const hoverToggling = () => setIsOpenHover(true);
    
    const hoverTogglingClose = () => setIsOpenHover(false);

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
        <DropDownContainer>
        <DropDownHeader onClick={toggling} onMouseOver={hoverToggling} onMouseLeave={hoverTogglingClose}>
          {header}
        </DropDownHeader>
        {(isOpen || isOpenHover) && (
          <DropDownListContainer>
            <DropDownList>
              {dropDownItems.map((dropDownItems) => (
                <ListItem onClick={onOptionClicked(formatString(dropDownItems))} key={Math.random()}>
                  {dropDownItems}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    )
};

export default Dropdown;
