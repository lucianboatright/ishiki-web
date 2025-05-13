import React from 'react';
import { StyledContainer, StyledImage, StyledTextBody } from './horozontalStack.styles';

interface HorozontalStackComponentProps {
    img?: any;
    textBody?: string;
}

const HorozontalStackComponent: React.FC<HorozontalStackComponentProps> = ({ img, textBody }) => {
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

export default HorozontalStackComponent;