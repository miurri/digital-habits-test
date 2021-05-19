import { FC } from 'react';

import { Head } from './Head';
import { SAside, SBackground, SWindow, SWindowContent } from './styles';

export const Window: FC = ({ children }) => {
  return (
    <SBackground>
      <SWindow>
        <Head />
        <SWindowContent>
          <SAside />
          {children}
        </SWindowContent>
      </SWindow>
    </SBackground>
  );
};
