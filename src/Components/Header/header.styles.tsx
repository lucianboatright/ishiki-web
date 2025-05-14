import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: black;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 50px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `;
  
  export const Logo = styled.div`
  font-weight: bold;
  color: white; 
  margin-right: 5rem;
  img {
    height: 2rem;
    }
    `;
    
    export const MenueWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  width: 30%;
`;
