import React from 'react';
import { CircleLogo, StyledContainer, StyledImage, StyledTextBody } from './verticalStack.styles';

interface VerticalStackomponentProps {
    img: any;
    letter?: string;
    textBody?: string;
    colorRight: string;
    colorLeft: string;
}

const VerticalStackomponent: React.FC<VerticalStackomponentProps> = ({ img, textBody, letter, colorLeft, colorRight }) => {
  return (
    <>
    <StyledContainer>
      {img &&
        <StyledImage>
            {img}
        </StyledImage>
      }
      {letter && 
        <CircleLogo FirstColor={colorLeft} SecondColor={colorRight}>{letter}</CircleLogo>
      }
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default VerticalStackomponent;