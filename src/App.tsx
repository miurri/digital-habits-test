import { FC } from 'react';

import { AppStoreProvider } from './mobx';
import { GlobalStyles } from './styles';
import { Root } from './views/Root';

const App: FC = () => {
  return (
    <AppStoreProvider>
      <GlobalStyles />
      <Root />
    </AppStoreProvider>
  );
};

export default App;
