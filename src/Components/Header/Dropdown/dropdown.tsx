import React, { useState } from 'react';
import { DropDownContainer, DropDownHeader, DropDownList, ListItem } from './dropdown.styles';


function formatString(input: string): string {
  return input
    .toLowerCase()
    .replace(/(?:\s+)([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/\s+/g, '');
}
interface DropdownProps {
  dropDownItems?: string[];
  header: string;
}

const Dropdown: React.FC<DropdownProps> = ({ header, dropDownItems }) => {

    const [selectedOption, setSelectedOption] = useState(null);
    
      const onOptionClicked = (value: any) => () => {
      setSelectedOption(value);
      console.log(selectedOption);
      scrollToSection(value)
    };

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <DropDownContainer>
      <DropDownHeader>{header}</DropDownHeader>
      <DropDownList>
        {dropDownItems &&
          <>
            {dropDownItems.map((dropDownItems, index) => (
              <ListItem  key={index} onClick={onOptionClicked(formatString(dropDownItems))}>
                {dropDownItems}
              </ListItem>
            ))}
          </>
        }
      </DropDownList>
    </DropDownContainer>
  );
};

export default Dropdown;
