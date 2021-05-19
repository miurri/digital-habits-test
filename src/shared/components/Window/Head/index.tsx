import { FC } from 'react';
import { runInAction } from 'mobx';

import { ArrowIcon } from '../../../icons/Arrow';
import { CloseIcon } from '../../../icons/Close';
import { FullScreenIcon } from '../../../icons/FullScreen';
import { HeadButton } from './Button';
import { RollUpIcon } from '../../../icons/RollUp';
import { useStore } from '../../../../mobx';
import { SHead, SHeadActions } from './styles';

export const Head: FC = () => {
  const store = useStore();

  const backHandleClick = () => {
    runInAction(() => store.setPreviousContent());
  };

  return (
    <SHead>
      <HeadButton filled onClick={backHandleClick}>
        <ArrowIcon direction='left' />
      </HeadButton>
      <SHeadActions>
        <HeadButton>
          <RollUpIcon />
        </HeadButton>
        <HeadButton>
          <FullScreenIcon />
        </HeadButton>
        <HeadButton>
          <CloseIcon />
        </HeadButton>
      </SHeadActions>
    </SHead>
  );
};
