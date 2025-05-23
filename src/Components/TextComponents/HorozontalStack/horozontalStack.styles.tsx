import styled from 'styled-components'


export const StyledContainer = styled.div({

    marginLeft: 'auto',
    marginRight: 'auto',
});

    

export const StyledImage = styled.div({

    backgroundColor: 'grey',
    width: '10rem',
    height: '5rem',
    marginRight: '4rem',
});
    

export const StyledTextBody = styled.h3({
  width: '11rem',
  fontFamily: 'Newsreader, serif',
  fontWeight: 200,
  lineHeight: '1.2',
    fontSize: '1.75rem',
});

export const StyledSvg = styled.img({
  width: '100px',
  height: '50px',
});
    
interface InfoBarColorProps {
    firstcolor?: string;
    secondcolor?: string; 
}

export const SquareLogo = styled.div<InfoBarColorProps>((props) => ({
    width: '175px',
    height: '300px',
    fontSize: '25px',
    color: 'white',
    // alignContent: 'center',
    background: `linear-gradient(95deg,${props.firstcolor}, ${props.secondcolor})`,
}));


export const StyledColorSection = styled.div({
    display: 'flex',
});

export const StyledDiv = styled.div({
    fontFamily: 'Helvetica, Arial, sans-serif',
    // textAlign: 'center',
    fontWeight: '400',
    marginTop: '.5rem',
fontSize: '2rem',
textOrientation: 'upright',
writingMode: 'vertical-rl',
color: 'white'
});

