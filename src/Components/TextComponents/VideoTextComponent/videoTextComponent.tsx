import React from 'react';
import Section from '../../Section/section';
import { SectionWrapper, Title, Paragraph, CreditsTitle, CreditsGrid, CreditItem, CreditRole, CreditName } from './videoTextComponent.styles';

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
        {/* <VideoWrapper> */}
            {/* <ReactPlayer   
              url="https://vimeo.com/843867279"
              controls
              width="100%"
              height="100%"
              /> */}
              {/* <div style={{position:'absolute',top:'5000',left:'0',width:'30rem',height:'10rem'}} >
                <ReactPlayer
                    url="https://vimeo.com/843867279"
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                    
                  />
              </div> */}
{/* 
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe
      src="https://player.vimeo.com/video/843867279?share=copy"
      style={{
        position: 'absolute',
        top: -700,
        left: 0,
        width: '100%',
        height: '100%',
        marginLeft:'40px',
        // marginBottom: '20rem',
      }}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div> */}
  {/* <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
    <iframe 
      src='https://player.vimeo.com/video/843867279?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
      frameBorder="0" 
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
      style={{position:'absolute',top:'0',left:'0',width:'30rem',height:'30rem'}} 
      title="The Forces Within">
    </iframe>
    </div> */}
          {/* <StyledVideo 
            src={video}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Embedded Vimeo Video" 
          /> */}
        {/* </VideoWrapper> */}
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
