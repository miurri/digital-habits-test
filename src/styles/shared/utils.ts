import { css } from 'styled-components';

export const resetList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
