import styled from 'styled-components';

export const Button = styled.button({
  height: '3rem',
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  padding: '0.25rem 0.75rem',
  fontSize: '2rem',
  border: '2px white solid',
  borderRadius: '50px',
  backgroundColor: 'black',
  color: 'white',
  cursor: 'pointer',
  zIndex: 1000,
  marginBottom: '2rem',
  marginRight: '0.75rem',

  '&:hover': {
    color: 'black',
    backgroundColor: 'white',
  },

  'svg': {
    width: '24px',
    height: '24px',
    display: 'block',
  },
});

export const ButtonContainer = styled.div({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
      '@media (max-width: 1300px)': {
        display: 'none',
    },
});

export const StyledText = styled.div({
  marginTop: '2rem',
});
