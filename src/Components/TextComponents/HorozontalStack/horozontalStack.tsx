import React from 'react';
import { SquareLogo, StyledColorSection, StyledContainer, StyledDiv, StyledTextBody } from './horozontalStack.styles';

interface HorozontalStackComponentProps {
    img?: any;
    sectionTitle?: string;
    title?: string;
    textBody?: string;
    colorTop: string;
    colorBottom: string;
}

const HorozontalStackComponent: React.FC<HorozontalStackComponentProps> = ({ img, textBody, title, colorTop, colorBottom, sectionTitle }) => {
  return (
    <>
    <StyledContainer>
      <StyledColorSection>
        <SquareLogo FirstColor={colorTop} SecondColor={colorBottom}>

        <StyledDiv>{sectionTitle}</StyledDiv>
        </SquareLogo>
      </StyledColorSection>
        <div>{title}</div>
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default HorozontalStackComponent;