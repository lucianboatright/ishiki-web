import styled from 'styled-components'



export const StyledContainer = styled.div({
  marginLeft: '50px',
  display: 'flex',
  marginTop: '4rem',
  marginBottom: '5rem',

  '@media (max-width: 768px)': {
    marginLeft: '1rem',
  },
});

export const StyledImage = styled.div({
  backgroundColor: 'white',
  borderRadius: '50%',
  marginRight: '4rem',
});

export const DetailsContainer = styled.div({});

export const StyledEmail = styled.div({
  fontSize: '2.5rem'
});

export const StyledDetails = styled.div({
  fontSize: '2rem'
});