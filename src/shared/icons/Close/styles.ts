import styled from 'styled-components';

import { Colors } from '../../../styles/shared/constants';

export const SClose = styled.div`
  position: relative;

  width: 10px;
  height: 10px;

  &:before {
    content: '';

    position: absolute;
    left: -1px;
    top: 4px;

    width: 12px;
    height: 1px;

    background-color: ${Colors.BLACK};
    transform: rotate(45deg);
  }

  &:after {
    content: '';

    position: absolute;
    left: -1px;
    top: 4px;

    width: 12px;
    height: 1px;

    background-color: ${Colors.BLACK};
    transform: rotate(-45deg);
  }
`;
