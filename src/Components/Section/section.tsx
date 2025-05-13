import React from 'react';
import { Wrapper, Title } from './section.styles';

type Props = {
  id?: string;
  title?: string;
  children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ id, title, children }) => (
  <Wrapper id={id}>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Section;