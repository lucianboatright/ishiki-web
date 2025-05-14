import styled from 'styled-components'


export const StyledContainer = styled("div")`
    display: flex;
    max-width: 50rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 3rem;
    @media (max-width: 768px) {
        // display: block;
        padding-left: 2rem;


    }
    `;
    
    
    export const StyledImage = styled("div")`
    background-color: grey;
    width: 10rem;
    height: 5rem;
    margin-right: 4rem;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width: 768px) {
        margin-right: auto;
        margin-left: auto;
    }
    `;
    
    
    export const StyledTextBody = styled("p")`
    // max-width: 35rem;
    margin-right: 2rem;
    margin-left: 1rem;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.8;
    @media (max-width: 768px) {
        text-align: center

    }
`;
    
    