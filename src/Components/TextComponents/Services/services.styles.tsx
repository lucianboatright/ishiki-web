import styled from 'styled-components';

export const SectionWrapper = styled('section')({
  background: 'black',
  color: 'white',
  padding: '4rem 2rem',
  fontFamily: "'Helvetica', sans-serif",
  height: '100%',
});

export const Top = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

export const Heading = styled('h1')({
  fontSize: '3rem',
  lineHeight: 1.1,
  flex: '1 1 40%',
});

export const Illustration = styled('img')({
  flex: '1 1 40%',
  display: 'flex',
  justifyContent: 'center',
  height: '20rem',

  '& svg, & img': {
    maxWidth: '100%',
    height: 'auto',
  },
});

export const ButtonsRow = styled('div')({
  display: 'flex',
  gap: '8rem',
  margin: '3rem 0',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const ServiceButton = styled('div')<{ gradient: string }>(({ gradient }) => ({
  flex: '1 1 15rem',
  maxWidth: '20rem',
  padding: '1.2rem 0',
  background: gradient,
  backgroundSize: '200% 100%',
  border: 'none',
  borderRadius: '.3rem',
  color: 'white',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-position 0.5s ease',
    textAlign: 'center',

  '&:hover': {
    backgroundPosition: 'right center',
  },
}));

export const Descriptions = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gap: '2rem',
  marginTop: '1rem',
});

export const DescriptionBlock = styled.div({
  textAlign: 'center',
});

export const DescText = styled.p({
  margin: '0 0 0.5rem',
  fontSize: '0.9rem',
});

export const SubText = styled.p({
  margin: 0,
  fontSize: '0.85rem',
  fontStyle: 'italic',
  color: '#ccc',
});
