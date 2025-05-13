import React from 'react';
import Section from '../../section';
import VerticalStackComponent from '../../../TextComponents/HorozontalStack/horozontalStack';
import { StyledContainer, StyledHorozontal, StyledTitle } from './ourLense.styles';

interface OurLensesComponentProps {
    title?: string;
    ourLensesItems: { img: any, text: string }[]
}

const OurLenses: React.FC<OurLensesComponentProps> = ({ title, ourLensesItems}) => {
  return (
    <Section id="ourLenses">
        <StyledContainer>
            <StyledTitle>
                {title}   
            </StyledTitle>
            <StyledHorozontal>

                {ourLensesItems.map((ourLensesItem) => (
                        <VerticalStackComponent textBody={ourLensesItem.text} img={ourLensesItem.img} />
                ))}
            </StyledHorozontal>
        </StyledContainer>
    </Section>



  );
};

export default OurLenses;