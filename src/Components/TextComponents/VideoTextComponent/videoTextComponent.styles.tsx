
import styled from 'styled-components';

export const StyledContainer = styled('h3')({
  marginTop: '10rem',
  marginBottom: '10rem',
});

export const SectionWrapper = styled('section')({
  color: 'white',
  backgroundColor: 'black',
  paddingBottom: '2rem',
  paddingTop: '2rem',
  marginLeft: '50px',

  '@media (max-width: 768px)': {
    marginRight: '1rem',
    marginLeft: '1rem',
  },
});

export const Title = styled('h2')({
  fontSize: '2.5rem',
  fontWeight: 100,
  marginBottom: '1rem',
    fontFamily: 'Helvetica, Arial, sans-serif',
});

export const Paragraph = styled('p')({
  marginBottom: '1rem',
  width: '50%',
  fontSize: '1.5rem',
  lineHeight: 1.6,
  fontWeight: 100,
  
  '@media (max-width: 768px)': {
    width: '100%',
  },
});

export const CreditsTitle = styled('h3')({
  fontWeight: 100,
  fontSize: '2.1em',
  marginTop: '3rem',
  marginBottom: '1.5rem',
    fontFamily: 'Helvetica, Arial, sans-serif',
});

export const CreditsGrid = styled.div({
  display: 'grid',
  maxWidth: '70rem',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.5rem',
});

export const CreditItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '0.8rem',
});

export const CreditRole = styled('span')({
  fontSize: '1.5em',
  marginBottom: '0.8rem',
});

export const CreditName = styled('span')({
  fontSize: '1.1em',
    fontStyle: 'italic',
});

export const StyledVideo = styled('iframe')({
    position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  border: 'none',
});

export const VideoWrapper = styled.div({
  position: 'relative',
  paddingTop: '56.25%', 
  height: '0',
  width: '80rem',
  overflow: 'hidden',
});