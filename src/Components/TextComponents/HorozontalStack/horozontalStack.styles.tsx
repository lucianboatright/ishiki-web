import styled from 'styled-components'


export const StyledContainer = styled("div")`
    margin-left: auto;
    margin-right: auto;
`;
    

export const StyledImage = styled("div")`
    background-color: grey;
    width: 10rem;
    height: 5rem;
    margin-right: 4rem;
`;
    

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
    FirstColor?: string;
    SecondColor?: string; 
}

export const SquareLogo = styled.div<InfoBarColorProps>((props) => ({
    width: '175px',
    height: '322px',
    fontSize: '25px',
    color: 'white',
    // textAlign: 'center',
    fontWeight: '100',
    // alignContent: 'center',
    background: `linear-gradient(95deg,${props.FirstColor}, ${props.SecondColor})`,
}));


export const StyledColorSection = styled('div')({
  display: 'flex',
});

export const StyledDiv = styled('div')({
    marginTop: '1rem',
fontSize: '2rem',
textOrientation: 'upright',
writingMode: 'vertical-rl',
color: 'white'
});

