import React from 'react';
import Section from '../../Section/section';
import { StyledImage, SectionWrapper, Title, Paragraph, CreditsTitle, CreditsGrid, CreditItem, CreditRole, CreditName } from './videoTextComponent.styles';

interface Credit {
    role: string;
    name: string;
}

interface VideoTextComponentProps {
  sectionTitle?: string;
    section: string;
    image: any;
    title: string;
    paragraphs: string[];
    creditsTitle: string;
    credits: Credit[];
}

const VideoTextComponent: React.FC<VideoTextComponentProps> = ({
  title,
  paragraphs,
  creditsTitle,
  credits,
  image,
  section,
  sectionTitle
}) => {
  return (
    <Section id={section} title={sectionTitle}>
        <StyledImage>{image}</StyledImage>
        <SectionWrapper>
        <Title>{title}</Title>
        {paragraphs.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
        ))}
        <CreditsTitle>{creditsTitle}</CreditsTitle>
        <CreditsGrid>
            {credits.map((credit, index) => (
            <CreditItem key={index}>
                <CreditRole>{credit.role}</CreditRole>
                <CreditName>{credit.name}</CreditName>
            </CreditItem>
            ))}
        </CreditsGrid>
        </SectionWrapper>
    </Section>
  );
};

export default VideoTextComponent;
