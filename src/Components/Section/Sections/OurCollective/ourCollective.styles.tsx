import styled from 'styled-components';

export const Section = styled.section({
  background: 'black',
  padding: '3rem',
  color: 'white',
});

export const Title = styled.h2({
  marginLeft: '50px',
  fontSize: '2rem',
  marginBottom: '5rem',
});

export const Grid = styled.div(({ theme }) => ({
  marginRight: '40px',
  width: '90%',
  marginTop: '4rem',
  marginLeft: '50px',
  display: 'grid',
  gap: '3rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  // maxWidth: '60rem',

  [`@media (max-width: 768px)`]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginLeft: '1rem',
  },
}));

