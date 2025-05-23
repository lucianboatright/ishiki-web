import styled from 'styled-components'


export const StyledContainer = styled.div({
    marginTop: '3rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: '4rem',
    width: '45rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    
    '@media (max-width: 768px)': {
      width: '20rem',
      paddingLeft: '2rem',
    },
  });
  
  export const StyledImage = styled.div({
    backgroundColor: 'grey',
    width: '10rem',
    height: '5rem',
    marginRight: '4rem',
    marginTop: 'auto',
    marginBottom: 'auto',
  
    '@media (max-width: 768px)': {
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  });
  
  export const StyledTextBody = styled.span({
  fontSize: '2rem',
  alignContent: 'center',
  fontFamily: 'Newsreader, serif',
  fontWeight: 200,
  lineHeight: '1.2',

    '@media (max-width: 768px)': {
      textAlign: 'left',
    },
  });
    
interface InfoBarColorProps {
    firstcolor?: string;
    secondcolor?: string; 
}


export const CircleLogo = styled.div<InfoBarColorProps>((props) => ({
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    fontSize: '50px',
    color: 'white',
    textAlign: 'center',
       fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: '100',
    alignContent: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    background: `linear-gradient(95deg,${props.firstcolor}, ${props.secondcolor})`,

}));
    