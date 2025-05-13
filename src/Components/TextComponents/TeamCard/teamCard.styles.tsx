import styled from 'styled-components';

export const Card = styled.div`
  display: block;
//   align-items: flex-start;
  gap: 1.5rem;
  width: 30rem;
  margin-bottom: 3rem;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #ccc;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Name = styled.h3`
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
`;

export const Title = styled.p`
  font-size: 0.875rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: #e0e0e0;
`;

