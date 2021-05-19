import { FC } from 'react';

import { ArrowProps } from './models';
import { SArrow } from './styles';
import { SIconWrapper } from '../styles';

export const ArrowIcon: FC<ArrowProps> = ({ direction }) => {
  return (
    <SIconWrapper>
      <SArrow direction={direction} />
    </SIconWrapper>
  );
};
