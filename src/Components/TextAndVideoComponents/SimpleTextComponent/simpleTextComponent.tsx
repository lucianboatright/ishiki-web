import React from 'react';
import { StyledContainer, StyledTextBody, StyledTitle } from './simpleTextComponent.styles';

interface SimpleTextComponentProps {
    title?: string;
    textBody?: string;
}

const SimpleTextComponent: React.FC<SimpleTextComponentProps> = ({ title, textBody }) => {
  return (
    <>
    <StyledContainer>
        <StyledTitle>
            {title}
        </StyledTitle>
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default SimpleTextComponent;