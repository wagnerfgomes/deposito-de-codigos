import { createGlobalStyle } from 'styled-components';
import GandhiSansRegular from './fonts/GandhiSans-Regular.otf';
import GandhiSansBold from './fonts/GandhiSans-bold.otf';
const EstilosGlobais = createGlobalStyle`

  @font-face {
  font-family: 'GandhiSansRegular';
  src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});}


  @font-face {
    font-family: 'GandhiSansBold';
    src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
  }


  html{
    overflow-x: hidden;
    font-family: GandhiSansRegular;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    max-width: 100vw;;
    height: 100%;
    font-size: 1.6rem;
  }`;

export default EstilosGlobais;
