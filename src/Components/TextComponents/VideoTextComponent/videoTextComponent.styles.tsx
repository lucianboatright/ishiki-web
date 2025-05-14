import styled from 'styled-components'


export const StyledContainer = styled("h3")`
    margin-top: 10rem;
    margin-bottom: 10rem;

`;
    

export const SectionWrapper = styled.section`
  color: white;
  background-color: black;
  padding-bottom: 2rem;
  padding-top: 2rem;
   margin-left: 50px;
   @media (max-width: 768px) {
    margin-right: 1remx;
    margin-left: 1rem;
   }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  width: 50%;
  line-height: 1.6;
  font-weight: 100;
  @media (max-width: 768px) {
      width: 100%;
  }
`;

export const CreditsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const CreditsGrid = styled.div`
  display: grid;
  max-width: 50rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const CreditItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const CreditRole = styled.span`
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const CreditName = styled.span`
  font-weight: normal;
    font-weight: 100;
`;

export const StyledImage = styled.span`
    display: flex;
    background-color: grey;
    width: 100%;
    height: 35rem;
`;