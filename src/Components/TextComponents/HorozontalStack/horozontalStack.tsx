import React from 'react';
import { StyledContainer, StyledImage, StyledTextBody } from './horozontalStack.styles';

interface HorozontalStackComponentProps {
    img?: any;
    title?: string;
    textBody?: string;
}

const HorozontalStackComponent: React.FC<HorozontalStackComponentProps> = ({ img, textBody, title }) => {
  return (
    <>
    <StyledContainer>

        <StyledImage>
            {img}
        </StyledImage>
        <div>{title}</div>
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default HorozontalStackComponent;