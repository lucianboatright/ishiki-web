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
  transition: all 0.4s ease;
  font-size: 1rem;
  font-weight: bold;

  // &:hover {
  //   background-position: left bottom;
  //   color: black;
  // }

  ${DropDownContainer}:hover & {
    background-color: #3e8e41;
  }
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

export const DropDownList = styled("div")`
  padding: 0;
  margin: 0;
  // padding-left: 1em;
  box-sizing: border-box;
  color: white
  font-size: 1.3rem;
  font-weight: 500;
  display: none;
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
  font-size: 10px;
  &:hover {
    color: grey;
  }
`;
