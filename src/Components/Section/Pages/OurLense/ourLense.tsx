import React from 'react';
import Section from '../../section';
import HorozontalStackComponent from '../../../TextAndVideoComponents/HorozontalStack/horozontalStack';
import { StyledContainer, StyledHorozontal } from './ourLense.styles';

interface OurLensesComponentProps {
    ourLensesItems: { img: any, text: string, colorTop: string, colorBottom: string, sectionTitle: string }[]
}

const OurLenses: React.FC<OurLensesComponentProps> = ({ ourLensesItems}) => {
  return (
    <Section id="ourLenses" title='Our Lenses'>
        <StyledContainer>
            <StyledHorozontal>
                {ourLensesItems.map((ourLensesItem) => (
                        <HorozontalStackComponent textBody={ourLensesItem.text} img={ourLensesItem.img} colorTop={ourLensesItem.colorTop} colorBottom={ourLensesItem.colorBottom} sectionTitle={ourLensesItem.sectionTitle}  />
                ))}
            </StyledHorozontal>
        </StyledContainer>
    </Section>



  );
};

export default OurLenses;