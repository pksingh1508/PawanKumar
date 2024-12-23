import { createGlobalStyle } from 'styled-components';

export const calsans = createGlobalStyle`
  @font-face {
    font-family: 'CalSans';
    src: url('/path/to/calsans.woff2') format('woff2'),
         url('/path/to/calsans.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .calsans {
    font-family: 'CalSans', sans-serif;
  }
`;
