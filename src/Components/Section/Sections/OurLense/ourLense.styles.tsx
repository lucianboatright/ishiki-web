import styled from 'styled-components'


export const StyledTitle = styled("h3")`
    text-align: center;
    font-size: 4rem;
    margin-bottom: 8rem;
    font-weight: 100;
`;
    


export const StyledHorozontal = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

`;
    

export const StyledContainer = styled("div")`
    margin-top: 15rem;
    margin-bottom: 10rem;

`;
    