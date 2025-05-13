import React from 'react';
import { StyledContainer, StyledTextBody, StyledTitle } from './simpleTextComponent.styles';

interface SimpleTextComponentProps {
    title?: string;
    subTitle?: string;
    textBody?: string;
    video?: any;
}

const SimpleTextComponent: React.FC<SimpleTextComponentProps> = ({ title, subTitle, textBody, video }) => {
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