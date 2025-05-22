import styled from 'styled-components'


export const StyledContainer = styled.div({
    marginTop: '3rem',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gap: '8rem',
    width: '40rem',
    marginRight: 'auto',
    marginLeft: 'auto',
  
    '@media (max-width: 768px)': {
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
  
  export const StyledTextBody = styled.p({
    fontWeight: 100,
    fontSize: '1.5rem',
  
    '@media (max-width: 768px)': {
      textAlign: 'center',
    },
  });
    
interface InfoBarColorProps {
    firstcolor?: string;
    secondcolor?: string; 
}


export const CircleLogo = styled.div<InfoBarColorProps>((props) => ({
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    fontSize: '25px',
    color: 'white',
    textAlign: 'center',
    fontWeight: '100',
    alignContent: 'center',
    // marginTop: 'auto',
    // marginBottom: 'auto',
    background: `linear-gradient(95deg,${props.firstcolor}, ${props.secondcolor})`,

}));
    