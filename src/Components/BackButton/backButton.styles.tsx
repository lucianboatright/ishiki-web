import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.25rem 0.75rem;
  font-size: 2rem;
  border: 2px white solid;
  border-radius: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  z-index: 1000;
  margin-bottom: 2rem;
  margin-right: 0.75rem;
  
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
`;

export const StyledText = styled.div`
    margin-top: 2rem;
`;