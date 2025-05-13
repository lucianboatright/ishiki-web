import React from 'react';
import Section from '../Section/section';
import { FooterWrapper, Divider, Copyright, Logo } from './footer.styles';
import logo from '../../assets/ISHIKI logo.jpg'

const Footer: React.FC = () => {
  return (
    <Section>
        <FooterWrapper>
        <Divider />
        <Logo><img src={logo} alt={'ISHIKI'} /></Logo>
        <Copyright>© Ishiki Studios 2025.</Copyright>
        </FooterWrapper>
    </Section>
  );
};

export default Footer;