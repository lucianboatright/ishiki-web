import styled from 'styled-components';

export const DropDownContainer = styled.div({
  width: '10.5em',
  marginLeft: '2rem',
});

export const DropDownHeader = styled.div({
  padding: '0.75rem 1.5rem',
  marginRight: '4rem',
  background: 'linear-gradient(to right, white 50%, black 50%)',
  backgroundSize: '200% 100%',
  backgroundPosition: 'right bottom',
  color: 'white',
  cursor: 'pointer',
  transition: 'background-position 0.4s ease, color 0.4s ease',

  fontSize: '1.5rem',
  width: '9rem',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 100,


  // Hover effect using parent component reference
  [`${DropDownContainer}:hover &`]: {
    backgroundPosition: 'left bottom',
    color: 'black',
  },
});

export const DropDownListContainer = styled.div({
  position: 'absolute',
  zIndex: 100,
});

export const DropDownList = styled.div({
  display: 'none',
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  color: 'white',
  fontSize: '1.3rem',
  fontWeight: 500,

  '&:first-child': {
    paddingTop: '0.8em',
  },

  [`${DropDownContainer}:hover &`]: {
    display: 'block',
  },
});

export const ListItem = styled.div({
  listStyle: 'none',
  // marginBottom: '1.5rem',
  // marginTop: '1.5rem',
      fontFamily: 'Helvetica, Arial, sans-serif',

  paddingLeft: '.75rem',
  paddingRight: '.75rem',
  paddingTop: '.25rem',
  paddingBottom: '.25rem',
  height: '2.2rem',
  backgroundColor: 'white',
  color: 'black',
  alignContent: 'center',
  width: '10.5rem',

  fontSize: '1.2rem',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
});