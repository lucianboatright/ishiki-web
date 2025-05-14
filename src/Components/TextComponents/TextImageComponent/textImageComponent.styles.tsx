import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background: #0a0a0a;
  color: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  font-family: 'Helvetica', sans-serif;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const TextColumn = styled.div`
  flex: 1;
  max-width: 800px;
`;

export const ImageColumn = styled.div`
  flex: 1;
  max-width: 800px;
  background: #eaeaea;
  position: relative;
  aspect-ratio: 4 / 3;

  &::before, &::after {
    content: '';
    position: absolute;
    background: #999;
  }

  &::before {
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    transform: rotate(45deg);
  }

  &::after {
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    transform: rotate(-45deg);
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-decoration: none;
  font-weight: 100;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 2;
  font-weight: 100;
`;