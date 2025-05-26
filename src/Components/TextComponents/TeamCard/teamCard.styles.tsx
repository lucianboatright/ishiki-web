import styled from 'styled-components';

export const Card = styled.div({
  display: 'block',
  gap: '1.5rem',
  maxWidth: '35rem',
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
  fontFamily: 'Helvetica, Arial, sans-serif',

});

export const Title = styled.p({
  fontSize: '1.5rem',
  marginTop: '1rem',
  fontWeight: 200,
  fontStyle: 'italic',
  letterSpacing: '1.5px',
});

export const Description = styled.p({
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: '#e0e0e0',
});