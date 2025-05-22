import React from 'react';
import Section from '../../section';
import HorozontalStackComponent from '../../../TextComponents/HorozontalStack/horozontalStack';
import { StyledContainer, StyledHorozontal, StyledTitle } from './ourLense.styles';

interface OurLensesComponentProps {
    title?: string;
    ourLensesItems: { img: any, text: string, colorTop: string, colorBottom: string, sectionTitle: string }[]
}

const OurLenses: React.FC<OurLensesComponentProps> = ({ title = 'sdfasdfasdfasdf', ourLensesItems}) => {
  return (
    <Section id="ourLenses">
        <StyledContainer>
            <StyledTitle>
                {title}   
            </StyledTitle>
            
            <StyledHorozontal>

                {ourLensesItems.map((ourLensesItem) => (
                        <HorozontalStackComponent textBody={ourLensesItem.text} img={ourLensesItem.img} colorTop={ourLensesItem.colorTop} colorBottom={ourLensesItem.colorBottom} sectionTitle={ourLensesItem.sectionTitle} />
                ))}
            </StyledHorozontal>
        </StyledContainer>
    </Section>



  );
};

export default OurLenses;