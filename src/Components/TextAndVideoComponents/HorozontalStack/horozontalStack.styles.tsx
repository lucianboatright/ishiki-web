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
    '@media (max-width: 1300px)': {
        fontSize: '1.2rem',
        width: '140px'
    },
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
    height: '23rem',
    fontSize: '25px',
    color: 'white',
    background: `linear-gradient(95deg,${props.firstcolor}, ${props.secondcolor})`,
    '@media (max-width: 1300px)': {
        width: '140px',
        height: '12rem',
        fontSize: '15px',
        // fontSize: '1.2rem',
    },
}));


export const StyledColorSection = styled.div({
    display: 'flex',
});

export const StyledDiv = styled.div({
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontWeight: '400',
    marginTop: '.5rem',
    fontSize: '2rem',
    textOrientation: 'upright',
    writingMode: 'vertical-rl',
    color: 'white',
    '@media (max-width: 1300px)': {
        width: 'auto',
        height: '14rem',
        fontSize: '18px',
        // fontSize: '1.2rem',
    },
});

