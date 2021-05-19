import { css } from 'styled-components';

import { BREAKPOINTS, Colors } from '../shared/constants';

export const scaffolding = css`
  html {
    box-sizing: border-box;
  }

  body {
    min-width: ${BREAKPOINTS.mobile};

    font-family: 'Open Sans', monospace;
    font-size: 16px;
    color: ${Colors.BLACK};
    letter-spacing: 0.25px;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (min-width: ${BREAKPOINTS.tablet}) {
      font-size: 18px;
    }
  }

  img {
    max-width: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  *::-webkit-search-cancel-button {
    display: none;
  }
`;
