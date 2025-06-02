import styled from 'styled-components';


export const StyledTitle = styled.h2({
  color: 'black',
  textAlign: 'center',
  maxWidth: '50rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '5rem',
  fontWeight: 100,
  fontFamily: 'Helvetica, Arial, sans-serif',
  '@media (max-width: 1300px)': {
    fontWeight: 500,
    paddingRight: '20px',
    paddingLeft: '20px',
    fontSize: '3rem',
  },
});

export const StyledTextBody = styled.h3({
  fontWeight: 100,
  fontSize: '2rem',
  lineHeight: '2.5rem',
  color: 'black',
  textAlign: 'center',
  maxWidth: '70rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (max-width: 1300px)': {
    fontWeight: 500,
    paddingRight: '20px',
    paddingLeft: '20px',
    fontSize: '1.3rem',
  },
});

export const StyledContainer = styled.div({
  alignContent: 'center',
  height: '50rem',
  backgroundColor: 'white',
  color: 'black',
});
