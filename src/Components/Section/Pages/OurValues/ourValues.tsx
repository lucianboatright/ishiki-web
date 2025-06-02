import React from 'react';
import Section from '../../section';
import { StyledContainer, StyledContent } from './ourValues.styes';
import HorozontalStackomponent from '../../../TextAndVideoComponents/VerticalStackStack/verticalStack';

interface OurValuesComponentProps {
    ourValueItems: { img: any, text: string, letter: string, colorLeft: string, colorRight: string, word: string, }[]
}

const OurValues: React.FC<OurValuesComponentProps> = ({ ourValueItems }) => {
  return (
    <Section id="ourValues" title='Our Values'>
        <StyledContainer>
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