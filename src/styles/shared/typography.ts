import { css } from 'styled-components';

import { BREAKPOINTS } from './constants';

export const bodyFontStyles = css`
  font-weight: normal;
  font-size: 10px;
  line-height: 1.2;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 12px;
  } ;
`;
