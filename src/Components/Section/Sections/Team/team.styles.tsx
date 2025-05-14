import styled from 'styled-components';


export const Section = styled.section`
  background-color: black;
  color: white;
  padding: 3rem;
  
  `;
  
  export const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 8rem;
  `;
  
  export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-left: 50px;
  margin-top: 5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 1rem;
  }
`;
