import styled from 'styled-components'


export const StyledContainer = styled.div({
    marginTop: '3rem',
    display: 'grid',
    gridTemplateColumns: ' 5% 35% 45%',
    height: '10rem',
    gap: '4rem',
    // maxWidth: '80rem',
    // marginRight: 'auto',
    // marginLeft: 'auto',
    
    '@media (max-width: 1079px)': {
      gridTemplateColumns: '15% auto',
      width: 'auto',
      paddingLeft: '0px',
    },
  });
  
  export const StyledImage = styled.div({
    backgroundColor: 'grey',
    width: '10rem',
    height: '5rem',
    marginRight: '4rem',
    marginTop: 'auto',
    marginBottom: 'auto',
  
    '@media (max-width: 1079px)': {
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  });
  
  export const StyledWord = styled.div({
    alignContent: 'center',
fontSize: '4rem',
fontWeight: 100,
fontFamily: 'Helvetica, Arial, sans-serif',
marginLeft: '1rem',
'@media (max-width: 1079px)': {
  display: 'none',
},
});

export const StyledTextBody = styled.span({
  fontSize: '2rem',
  alignContent: 'center',
  fontFamily: 'Newsreader, serif',
  fontWeight: 200,
  lineHeight: '1.2',
  
  '@media (max-width: 1079px)': {
    marginLeft: '-1rem',
    textAlign: 'left',
    fontSize: '1.5rem'
  },
});

interface InfoBarColorProps {
  firstcolor?: string;
  secondcolor?: string; 
}


export const CircleLogo = styled.div<InfoBarColorProps>((props) => ({
    fontSize: '4rem',
    width: '7rem',
    height: '7rem',
    borderRadius: '50%',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: '100',
    alignContent: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    background: `linear-gradient(95deg,${props.firstcolor}, ${props.secondcolor})`,
    marginBottom: 'auto',
    marginTop: 'auto',
    '@media (max-width: 1079px)': {
      fontSize: '3rem',
      width: '5rem',
      height: '5rem',
      marginLeft: '10px',

    },
}));
    