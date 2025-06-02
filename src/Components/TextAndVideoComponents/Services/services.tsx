import React from 'react';
import { DescriptionBlock, Descriptions, DescText, Heading, Illustration, SectionWrapper, ServiceButton, SubText, Top } from './services.styles';

interface Service {
  label: string;
  gradient: string;     
  description: string;
  subtext: string;
}

interface ServicesSectionProps {
  title: string;
  image: string; 
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

    <Descriptions>
      {services.map((svc) => (
        <>
          <DescriptionBlock key={svc.label}>
            <ServiceButton key={svc.label} gradient={svc.gradient}>
              {svc.label}
            </ServiceButton>
            <DescText>{svc.description}</DescText>
            <SubText>{svc.subtext}</SubText>
          </DescriptionBlock>
        </>
      ))}
    </Descriptions>
  </SectionWrapper>
);

export default Services;
