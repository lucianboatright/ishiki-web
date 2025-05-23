import styled from 'styled-components';

export const Wrapper = styled.section({
  scrollMarginTop: '100px',
  marginTop: '8rem',
});

export const Title = styled.h2({
  fontSize: '3rem',
  marginBottom: '1rem',
  marginLeft: '50px',
  fontWeight: 100,
    fontFamily: 'Helvetica, Arial, sans-serif',

  '@media (max-width: 768px)': {
    marginLeft: '1rem',
  },
});