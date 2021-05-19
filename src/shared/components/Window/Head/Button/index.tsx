import { FC } from 'react';

import { HeadButtonProps } from './models';
import { SButton } from './styles';

export const HeadButton: FC<HeadButtonProps> = ({ filled, onClick, children }) => {
  return (
    <SButton onClick={onClick} filled={filled}>
      {children}
    </SButton>
  );
};
