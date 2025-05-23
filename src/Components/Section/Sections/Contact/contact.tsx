import React from 'react';
import Section from '../../section';
import { DetailsContainer, StyledContainer, StyledDetails, StyledEmail, StyledImage } from './contact.styles';

interface ContactProps {

}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Section id='contact' title='Get in touch'>
        <StyledContainer>
            <DetailsContainer>
                <StyledEmail>Email</StyledEmail>
                <StyledDetails>conatct info</StyledDetails>
            </DetailsContainer>
        </StyledContainer>
    </Section>
  );
};

export default Contact;