import React from 'react';
import Section from '../../section';
import { StyledContainer, StyledContent, StyledTitle } from './ourValues.styes';
import HorozontalStackomponent from '../../../TextComponents/VerticalStackStack/verticalStack';

interface OurValuesComponentProps {
    title?: string;
    ourValueItems: { img: any, text: string, letter: string, colorLeft: string, colorRight: string, word: string, }[]
}

const OurValues: React.FC<OurValuesComponentProps> = ({ title, ourValueItems }) => {
  return (
    <Section id="ourValues">
        <StyledContainer>
            <StyledTitle>
                {title}   
            </StyledTitle>
            <StyledContent>
              {ourValueItems.map((ourValueItems) => (
                      <HorozontalStackomponent word={ourValueItems.word} textBody={ourValueItems.text} img={ourValueItems.img} letter={ourValueItems.letter} colorRight={ourValueItems.colorRight} colorLeft={ourValueItems.colorLeft} />
              ))}
            </StyledContent>
        </StyledContainer>
    </Section>



  );
};

export default OurValues;