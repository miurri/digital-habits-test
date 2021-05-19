import { observer } from 'mobx-react-lite';
import { FC, useEffect } from 'react';
import { runInAction, toJS } from 'mobx';

import { Content } from '../../shared/components/Content';
import { SContentItemsWrapper } from './styles';
import { Window } from '../../shared/components/Window';
import { useStore } from '../../mobx';

export const Root: FC = observer(() => {
  const store = useStore();

  useEffect(() => {
    runInAction(() => store.addContent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Window>
      <SContentItemsWrapper>
        {store.isLoading ? (
          <span>...</span>
        ) : (
          store.content[store.currentDirId]?.children?.map(item => (
            <Content key={item.id} item={toJS(item)} />
          ))
        )}
      </SContentItemsWrapper>
    </Window>
  );
});
