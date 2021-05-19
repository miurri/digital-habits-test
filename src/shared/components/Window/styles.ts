import styled from 'styled-components';

import { Colors } from '../../../styles/shared/constants';

export const SBackground = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${Colors.BLUE};
`;

export const SWindow = styled.div`
  width: 80%;
  height: 70%;

  background-color: ${Colors.WHITE};
`;

export const SWindowContent = styled.div`
  height: calc(100% - 30px);

  display: flex;
`;

export const SAside = styled.div`
  width: 20%;

  background-color: ${Colors.LIGHT_GRAY};
`;
