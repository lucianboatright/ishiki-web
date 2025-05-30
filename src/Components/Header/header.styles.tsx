import styled from 'styled-components';

export const HeaderWrapper = styled.header({
  position: 'fixed',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  background: 'black',
  color: 'white',
  height: '2rem',
  width: '100%',
  zIndex: '1',
  '@media (max-width: 1200px)': {
    width: 'auto',
  },
});

export const Logo = styled.div({
  img: {
    height: '40px',
  },
});

export const MenueWrapper = styled.nav({
  display: 'flex',
  gap: '2rem',

  '@media (max-width: 1200px)': {
    display: 'none',
  },
});

export const Burger = styled.div({
  display: 'none',
  flexDirection: 'column',
  gap: '6px',
  cursor: 'pointer',

  span: {
    height: '3px',
    width: '24px',
    background: 'white',
    borderRadius: '2px',
  },

  '@media (max-width: 1200px)': {
    display: 'flex',
    gap: '8',
  },
});

export const MobileMenu = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: 'black',
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  padding: '1rem 2rem',
  zIndex: 999,

  '@media (min-width: 1200px)': {
    display: 'none',
  },
});

export const ListItem = styled.div({
  listStyle: 'none',
  paddingLeft: '0.75rem',
  paddingRight: '0.75rem',
  height: '2.2rem',
  backgroundColor: 'white',
  color: 'black',
  alignContent: 'center',
});

export const StyledList = styled.div({
  marginLeft: '5rem',
});

export const HeaderListItem = styled.div({
  listStyle: 'none',
  padding: '0.25rem .75rem',
  marginRight: '4rem',
  background: 'linear-gradient(to right, white 50%, black 50%)',
  backgroundSize: '200% 100%',
  backgroundPosition: 'right bottom',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-position 0.4s ease, color 0.4s ease',

  fontSize: '1.4rem',
  width: '6rem',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 100,

  '&:hover': {
    backgroundColor: 'white',
        backgroundPosition: 'left bottom',

    color: 'black',
  },
});

export const RightSection = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '@media (max-width: 1200px)': {
    gap: '1rem',
  },
});

export const StyledRight = styled.div({
  display: 'flex',
  '@media (max-width: 1200px)': {
  },
});
