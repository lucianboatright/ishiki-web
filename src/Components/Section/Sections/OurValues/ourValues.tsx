import React from 'react';
import Section from '../../section';
import { StyledContainer, StyledTitle } from './ourValues.styes';
import HorozontalStackomponent from '../../../TextComponents/VerticalStackStack/verticalStack';

interface OurValuesComponentProps {
    title?: string;
    ourValueItems: { img: any, text: string }[]
}

const OurValues: React.FC<OurValuesComponentProps> = ({ title, ourValueItems}) => {
  return (
    <Section id="ourValues">
        <StyledContainer>
            <StyledTitle>
                {title}   
            </StyledTitle>
            {ourValueItems.map((ourValueItems) => (
                    <HorozontalStackomponent textBody={ourValueItems.text} img={ourValueItems.img} />
            ))}
        </StyledContainer>
    </Section>



  );
};

export default OurValues;