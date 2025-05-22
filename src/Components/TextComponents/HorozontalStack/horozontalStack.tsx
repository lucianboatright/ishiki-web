import React from 'react';
import { SquareLogo, StyledContainer, StyledTextBody } from './horozontalStack.styles';
import { StyledDiv } from '../../Section/Sections/OurLense/ourLense.styles';

interface HorozontalStackComponentProps {
    img?: any;
    title?: string;
    textBody?: string;
    colorTop: string;
    colorBottom: string;
}

const HorozontalStackComponent: React.FC<HorozontalStackComponentProps> = ({ img, textBody, title, colorTop, colorBottom }) => {
  return (
    <>
    <StyledContainer>
      <div>

        <SquareLogo FirstColor={colorTop} SecondColor={colorBottom} />
        <StyledDiv>BIOSPHERE</StyledDiv>
      </div>
        <div>{title}</div>
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default HorozontalStackComponent;