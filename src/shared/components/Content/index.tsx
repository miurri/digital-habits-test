import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { runInAction } from 'mobx';
import { faBook, faFileArchive, faFolder, faImages } from '@fortawesome/free-solid-svg-icons';

import { Colors } from '../../../styles/shared/constants';
import { ContentItem } from '../../../api/models';
import { useStore } from '../../../mobx';
import { SContentItemWrapper, SFileName } from './styles';

export const Content: FC<{ item: ContentItem }> = ({ item }) => {
  const store = useStore();

  const fileFormat = item.title.split('.')[1];
  const isFolder = !fileFormat;

  const getIcon = () => {
    switch (fileFormat) {
      case 'zip':
        return faFileArchive;
      case 'epub':
        return faBook;
      case 'jpg':
        return faImages;

      default:
        return faFolder;
    }
  };

  const itemHandleClick = () => {
    if (isFolder) {
      runInAction(() => store.addContent(item.id));
    }
  };

  return (
    <SContentItemWrapper clicalbe={isFolder} onClick={itemHandleClick}>
      <FontAwesomeIcon icon={getIcon()} size='4x' color={Colors.YELLOW} />
      <SFileName>{item.title}</SFileName>
    </SContentItemWrapper>
  );
};
