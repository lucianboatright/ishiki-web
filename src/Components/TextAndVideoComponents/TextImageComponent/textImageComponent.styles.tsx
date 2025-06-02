import styled from 'styled-components';

export const SectionWrapper = styled.section({
  background: '#0a0a0a',
  color: 'white',
  padding: '4rem 2rem',
  // display: 'flex',
  justifyContent: 'center',
  fontFamily: "'Helvetica', sans-serif",
  backgroundColor: 'black',

  '@media (max-width: 768px)': {
    padding: '1rem',
  },
});

export const ContentWrapper = styled.div({
  // width: '90%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5%',

  '@media (max-width: 1350px)': {
    display: 'block',
  },
});

export const TextColumn = styled.div({
  flex: 1,
});

export const ImageColumn = styled.img({
  flex: 1,
  maxWidth: '800px',
  position: 'relative',

  width: '100%',
height: 'auto',
display: 'block',
  'img': {

  }
});

export const Title = styled.h1({
  fontSize: '3rem',
  marginBottom: '3rem',
  textDecoration: 'none',
  fontWeight: 100,
});

export const SubTitle = styled.h2({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '1.5rem',
});

export const Paragraph = styled.div({
  marginBottom: '1rem',
  lineHeight: 2,
  fontWeight: 100,
  fontSize: '1.2rem',
});