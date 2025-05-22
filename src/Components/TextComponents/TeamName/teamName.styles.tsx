import styled from 'styled-components';


export const Card = styled.div({
  textAlign: 'left',
  width: '20rem',
  position: 'relative', 

  '&::before': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '1px',
    background: 'linear-gradient(95deg, rgba(222, 109, 4, 1), rgba(249, 218, 90, 1))',
  },
});

export const Name = styled.p({
  marginBottom: '0.5rem',
  fontSize: '1.5rem',
  color: 'white',
  fontWeight: 100,
});

export const Role = styled.p({
  margin: 0,
  fontSize: '1.3rem',
  color: '#ccc',
});