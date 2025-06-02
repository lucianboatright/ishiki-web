import React, { useEffect } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const StyledIframe = styled.iframe({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
});

const VimeoEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <VideoContainer>
      <StyledIframe
        src="https://player.vimeo.com/video/744884300?badge=0&autopause=0&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        title="UF_0831GRID"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default VimeoEmbed;
