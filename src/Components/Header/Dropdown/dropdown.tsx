import React, { useState } from 'react';

import styled from 'styled-components'

export const DropDownContainer = styled("div")`
  width: 10.5em;
  margin-left: 2rem;
`;

export const DropDownHeader = styled("div")`
  padding: 0.75rem 1.5rem;
  margin-right: 4rem;
  background: linear-gradient(to right, white 50%, black 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  color: white;
  cursor: pointer;
  transition: background-position 0.4s ease, color 0.4s ease;

  font-size: 1.4rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;

  width: 9rem;

  ${DropDownContainer}:hover & {
    background-position: left bottom;
    color: black;
  }
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
`;

export const DropDownList = styled("div")`
  display: none; 
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;

  &:first-child {
    padding-top: 0.8em;
  }

  ${DropDownContainer}:hover & {
    display: block;
  }
`;

export const ListItem = styled("div")`
  list-style: none;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 2.2rem;
  background-color: white;
  color: black;
  align-content: center;
    width: 10.5rem;

    font-size: 1rem;
    cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;


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
