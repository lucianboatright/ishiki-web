import styled from 'styled-components';

export const Card = styled.div({
  display: 'block',
  gap: '1.5rem',
  maxWidth: '30rem',
  marginBottom: '3rem',
});

export const Avatar = styled.img({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: '#ccc',
  marginBottom: '2rem',
});

export const Info = styled.div({
  flex: 1,
});

export const Name = styled.h3({
  fontSize: '1.8rem',
  margin: 0,
  fontWeight: 100,
});

export const Title = styled.p({
  fontSize: '1.5rem',
  marginTop: '1rem',
  fontWeight: 100,
  fontStyle: 'italic'
});

export const Description = styled.p({
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: '#e0e0e0',
});