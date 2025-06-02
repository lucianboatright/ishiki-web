import styled from 'styled-components';

// export const HeaderWrapper = styled.header({
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '1rem 2rem',
//   position: 'fixed',
//   background: 'black',
//   color: 'white',
//   height: '3rem',
//     // position: 'fixed',
//   top: '0',
//   left: '0',
// });

export const HeaderWrapper = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  position: 'fixed', 
  background: 'black',
  color: 'white',
  height: '3rem',
  top: 0,
  left: 0,
  width: '100%', 
  zIndex: 1000,
  '@media (max-width: 1200px)': {
    marginRight: '5rem',
    marginLeft: 'auto',
  },
});


// export const HeaderWrapper = styled.header({
//   position: 'fixed',
//   top: '0',
//   left: '0',
//   display: 'flex',
//   justifyContent: 'space-between',
//   padding: '1rem 2rem',
//   background: 'black',
//   color: 'white',
//   height: '2rem',
//   // width: '100%',
//   zIndex: '1',
//   // '@media (max-width: 1200px)': {
//   //   width: 'auto',
//   // },
// });


export const Logo = styled.div({
  img: {
    height: '40px',
  },
});

export const MenueWrapper = styled.nav({
  display: 'flex',
  gap: '2rem',
  marginLeft: '50px',

  '@media (max-width: 1300px)': {
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

  '@media (max-width: 1300px)': {
    marginLeft: 'auto',
    marginRight: '10%',
    display: 'flex',
  },
});

export const MobileMenu = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: 'black',
  position: 'absolute',
  top: '100%',
  left: '35%',
  width: '100%',
  padding: '0rem 2rem 2rem 2rem',
  zIndex: 999,

  '@media (min-width: 1300px)': {
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
    fontFamily: 'Helvetica, Arial, sans-serif',

});

export const StyledList = styled.div({
  // marginLeft: '5rem',
  width: '20rem',
  '@media (min-width: 1300px)': {
    marginLeft: 'none',
  },
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
  marginBottom: '1rem',

  '&:hover': {
    backgroundColor: 'white',
    backgroundPosition: 'left bottom',
    color: 'black',
  },
});