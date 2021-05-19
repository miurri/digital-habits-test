import styled from 'styled-components';

import { ArrowProps } from './models';
import { Colors } from '../../../styles/shared/constants';

export const SArrow = styled.div<ArrowProps>`
  position: relative;

  width: 10px;
  height: 1px;

  background-color: ${Colors.BLACK};

  &:before {
    content: '';

    position: absolute;
    left: -1px;
    top: 2px;

    width: 6px;
    height: 1px;

    background-color: ${Colors.BLACK};
    transform: rotate(45deg);
  }

  &:after {
    content: '';

    position: absolute;
    left: -1px;
    top: -2px;

    width: 6px;
    height: 1px;

    background-color: ${Colors.BLACK};
    transform: rotate(-45deg);
  }
`;
