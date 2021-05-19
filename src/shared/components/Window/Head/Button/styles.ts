import styled from 'styled-components';

import { Colors } from '../../../../../styles/shared/constants';
import { HeadButtonProps } from './models';

export const SButton = styled.div<HeadButtonProps>`
  width: 45px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ filled }) => (filled ? Colors.GRAY : 'transparent')};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
`;
