import React from 'react';
import { StyledContainer, StyledImage, StyledTextBody } from './SmallTextImageComponent.styles';

interface SmallTextImageComponentProps {
    img?: any;
    textBody?: string;
}

const SmallTextImageComponent: React.FC<SmallTextImageComponentProps> = ({ img, textBody }) => {
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

export default SmallTextImageComponent;