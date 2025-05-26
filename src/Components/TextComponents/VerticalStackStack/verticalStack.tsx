import React from 'react';
import { CircleLogo, StyledContainer, StyledImage, StyledTextBody, StyledWord } from './verticalStack.styles';

interface VerticalStackomponentProps {
    img: any;
    letter?: string;
    textBody?: string;
    colorRight: string;
    colorLeft: string;
    word: string;
}

const VerticalStackomponent: React.FC<VerticalStackomponentProps> = ({ img, textBody, letter, colorLeft, colorRight, word }) => {
  return (
    <>
    <StyledContainer>
      {img &&
        <StyledImage>
            {img}
        </StyledImage>
      }
      {letter && 
      <>
      
      <CircleLogo firstcolor={colorLeft} secondcolor={colorRight}>{letter}</CircleLogo>
    <StyledWord>{word}</StyledWord>
      </>
      }
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default VerticalStackomponent;