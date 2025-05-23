import React from 'react';
import { SectionWrapper, Top, Heading, Illustration, ButtonsRow, ServiceButton, DescriptionBlock, Descriptions, DescText, SubText } from './services.styles';

interface Service {
  label: string;
  gradient: string;      // e.g. 'linear-gradient(90deg, #3CEACE, #1154E0)'
  description: string;
  subtext: string;
}

interface ServicesSectionProps {
  title: string;
  image: string; // e.g. an SVG or <img />
  services: Service[];
}

export const Services: React.FC<ServicesSectionProps> = ({
  title,
  image,
  services,
}) => (
  <SectionWrapper>
    <Top>
      <Heading>{title}</Heading>
      <Illustration src={image} alt='lalala' />
      
    </Top>

    <ButtonsRow>
      {services.map((svc) => (
        <ServiceButton key={svc.label} gradient={svc.gradient}>
          {svc.label}
        </ServiceButton>
      ))}
    </ButtonsRow>

    <Descriptions>
      {services.map((svc) => (
        <DescriptionBlock key={svc.label}>
          <DescText>{svc.description}</DescText>
          <SubText>{svc.subtext}</SubText>
        </DescriptionBlock>
      ))}
    </Descriptions>
  </SectionWrapper>
);

export default Services;
