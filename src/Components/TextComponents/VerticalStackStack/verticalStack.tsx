import React from 'react';
import { StyledContainer, StyledImage, StyledTextBody } from './verticalStack.styles';

interface VerticalStackomponentProps {
    img?: any;
    textBody?: string;
}

const VerticalStackomponent: React.FC<VerticalStackomponentProps> = ({ img, textBody }) => {
  return (
    <>
    <StyledContainer>
        <StyledImage>
            {img}
        </StyledImage>
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default VerticalStackomponent;