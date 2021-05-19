import styled from 'styled-components';

import { bodyFontStyles } from '../../../styles/shared/typography';

export const SContentItemWrapper = styled.div<{ clicalbe: boolean }>`
  width: 110px;
  max-height: 100px;

  display: grid;
  grid-template-rows: 72px 1fr;
  grid-gap: 10px;
  justify-items: center;

  flex-shrink: 0;

  cursor: ${({ clicalbe }) => (clicalbe ? 'pointer' : 'default')};
`;

export const SFileName = styled.p`
  ${bodyFontStyles};

  margin: 0;

  text-align: center;
`;
