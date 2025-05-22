import React from 'react';
import Section from '../../Section/section';
import { StyledVideo, SectionWrapper, Title, Paragraph, CreditsTitle, CreditsGrid, CreditItem, CreditRole, CreditName, VideoWrapper } from './videoTextComponent.styles';
import ReactPlayer from 'react-player/vimeo';

interface Credit {
    role: string;
    name: string;
}

interface VideoTextComponentProps {
  sectionTitle?: string;
    section: string;
    video: any;
    title: string;
    paragraphs: string[];
    firstreditsTitle?: string;
    firstCredits?: Credit[];
    secondCreditsTitle?: string;
    secondCredits?: Credit[];
    thirdCreditsTitle?: string;
    thirdCredits?: Credit[];
}

const VideoTextComponent: React.FC<VideoTextComponentProps> = ({
  title,
  paragraphs,
  firstreditsTitle,
  firstCredits,
  video,
  section,
  sectionTitle,
  secondCreditsTitle,
  secondCredits,
  thirdCreditsTitle,
  thirdCredits
}) => {
  return (
    <Section id={section} title={sectionTitle}>
        <VideoWrapper>
            <ReactPlayer url="https://vimeo.com/843867279" controls width="100%" />
          {/* <StyledVideo 
            src={video}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Embedded Vimeo Video" 
          /> */}
        </VideoWrapper>
        <SectionWrapper>
        <Title>{title}</Title>
        {paragraphs.map((text, index) => (
            <Paragraph key={index}>{text}</Paragraph>
        ))}
        {firstreditsTitle && firstCredits && 
          <>
            <CreditsTitle>{firstreditsTitle}</CreditsTitle>
            <CreditsGrid>
                {firstCredits.map((credit, index) => (
              <CreditItem key={index}>
                  <CreditRole>{credit.role}</CreditRole>
                  <CreditName>{credit.name}</CreditName>
              </CreditItem>
              ))}
          </CreditsGrid>
          </>
        }
        {secondCreditsTitle && secondCredits && 
          <>
            <CreditsTitle>{secondCreditsTitle}</CreditsTitle>
            <CreditsGrid>
                {secondCredits.map((credit, index) => (
              <CreditItem key={index}>
                  <CreditRole>{credit.role}</CreditRole>
                  <CreditName>{credit.name}</CreditName>
              </CreditItem>
              ))}
          </CreditsGrid>
          </>
        }
        {thirdCreditsTitle && thirdCredits && 
          <>
            <CreditsTitle>{thirdCreditsTitle}</CreditsTitle>
            <CreditsGrid>
                {thirdCredits.map((credit, index) => (
              <CreditItem key={index}>
                  <CreditRole>{credit.role}</CreditRole>
                  <CreditName>{credit.name}</CreditName>
              </CreditItem>
              ))}
          </CreditsGrid>
          </>
        }
        </SectionWrapper>
    </Section>
  );
};

export default VideoTextComponent;
