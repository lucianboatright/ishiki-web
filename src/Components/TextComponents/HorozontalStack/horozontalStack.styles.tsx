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
    

export const StyledTextBody = styled("h3")`
    width: 11rem;
    font-weight: 100;
    font-size: 1.5rem;
`;
    

export const StyledSvg = styled("img")`
    width: 100px;
    height: 50px;
`;
    
interface InfoBarColorProps {
    firstcolor?: string;
    secondcolor?: string; 
}

export const SquareLogo = styled.div<InfoBarColorProps>((props) => ({
    width: '175px',
    height: '322px',
    fontSize: '25px',
    color: 'white',
    // textAlign: 'center',
    fontWeight: '100',
    // alignContent: 'center',
    background: `linear-gradient(95deg,${props.firstcolor}, ${props.secondcolor})`,
}));


export const StyledColorSection = styled.div({
  display: 'flex',
});

export const StyledDiv = styled.div({
    marginTop: '1rem',
fontSize: '2rem',
textOrientation: 'upright',
writingMode: 'vertical-rl',
color: 'white'
});

