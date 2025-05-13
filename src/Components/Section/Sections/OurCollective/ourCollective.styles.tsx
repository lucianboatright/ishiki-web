import styled from 'styled-components';

export const Section = styled.section`
  background: black;
  padding: 3rem;
  color: white;
  `;
  
  export const Title = styled.h2`
  margin-left: 50px;
  font-size: 2rem;
  margin-bottom: 5rem;
  `;
  
  export const Grid = styled.div`
  margin-top: 4rem;
    margin-left: 50px;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
    max-width: 60rem;
`;
