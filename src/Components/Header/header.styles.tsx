import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: relative;
  background: black;
  color: white;
`;

export const Logo = styled.div`
  img {
    height: 40px;
  }
`;

export const MenueWrapper = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Burger = styled.div`
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  span {
    height: 3px;
    width: 24px;
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: black;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const ListItem = styled("div")`
  list-style: none;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 2.2rem;
  background-color: white;
  color: black;
  align-content: center;

`;

export const StyledList = styled("div")`
  margin-left: 5rem;
`;