import React, { useEffect, useState } from 'react';
import { Button, ButtonContainer, StyledText } from './backButton.styles';


const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <>
        <ButtonContainer>
            <Button onClick={scrollToTop}>↑</Button>
            <StyledText>Back to top</StyledText>
        </ButtonContainer>
    </>
  )
};

export default BackToTopButton;
