import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Newsreader';
    src: url('Fonts/Newsreader/Newsreader-VariableFont_opsz,wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }


  @font-face {
    font-family: 'Newsreader';
    src: url('Fonts/Newsreader/Newsreader-Italic-VariableFont_opsz,wght.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Newsreader';
    src: url('Fonts/Newsreader/static/Newsreader_60pt-ExtraLight.ttf') format('truetype');
  font-weight: 200;
  font-style: normal;
    }
  @font-face {
    font-family: 'Newsreader';
    src: url('Fonts/Newsreader/static/Newsreader_60pt-ExtraLightItalic.ttf') format('truetype');
  font-weight: 200;
  font-style: italic;
    }

  body {
    margin: 0;
    font-family: 'Newsreader', sans-serif;
    background-color: #000;
    color: #fff;
  }
`;

export default GlobalStyle;