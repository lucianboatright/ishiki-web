import styled from 'styled-components'

export const StyledTitle = styled('h3')({
    textAlign: 'center',
    fontSize: '4rem',
    fontWeight: 100,
        fontFamily: 'Helvetica, Arial, sans-serif',

  });
  
  export const StyledTextBody = styled('h3')({
    maxWidth: '80rem',
  });
  
  export const StyledContainer = styled.div({
    marginTop: '0rem',
    marginLeft: '50px',
    '@media (max-width: 1079px)': {
      marginLeft: '10px',

    },
  });
  
  export const StyledContent = styled.div({
    marginTop: '0rem',
  });