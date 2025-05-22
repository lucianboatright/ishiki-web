import React from 'react';
import { SquareLogo, StyledContainer, StyledTextBody } from './horozontalStack.styles';

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
        <SquareLogo FirstColor={colorTop} SecondColor={colorBottom} />
        <div>{title}</div>
        <StyledTextBody>
            {textBody}
        </StyledTextBody>
    </StyledContainer>
    </>


  );
};

export default HorozontalStackComponent;