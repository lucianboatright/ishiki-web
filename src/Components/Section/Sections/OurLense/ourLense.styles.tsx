import styled from 'styled-components'

export const StyledTitle = styled('h3')({
  textAlign: 'center',
  fontSize: '4rem',
  marginBottom: '8rem',
  fontWeight: 100,
});

export const StyledHorozontal = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

export const StyledContainer = styled('div')({
  marginTop: '15rem',
  marginBottom: '10rem',
});
