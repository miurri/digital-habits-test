import { FC, createContext, useContext } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';

import { ContentItem } from '../api/models';
import { apiService } from '../api';
import { applyConfigure } from './config';

applyConfigure();

const createAppStore = () => {
  const content: Record<number, ContentItem> = {};
  const isLoading = true;
  const error = null;

  const dirHistory: number[] = [];
  const currentDirId = 0;

  return makeAutoObservable({
    dirHistory,
    currentDirId,

    isLoading: isLoading as boolean,
    error: error as string | null,
    content,

    async addContent(dirId = 0): Promise<void> {
      this.dirHistory.push(dirId);
      this.currentDirId = dirId;

      const hasRequestedContent = dirId && this.content[dirId]?.title;

      const getContent = async () => {
        this.isLoading = true;

        await apiService
          .getContent(dirId)
          .then(newContent => {
            runInAction(() => {
              this.content[newContent.id] = newContent;
              this.isLoading = false;
            });
          })
          .catch(() => {
            runInAction(() => {
              this.isLoading = false;
              this.error = 'Something went wrong';
            });
          });
      };

      if (!hasRequestedContent) await getContent();
    },

    setPreviousContent(): void {
      runInAction(() => {
        if (this.dirHistory.length > 1) {
          this.dirHistory.pop() as number;
          this.currentDirId = this.dirHistory[this.dirHistory.length - 1];
        }
      });
    },
  });
};

const store = createAppStore();

const AppContext = createContext(store);

export const AppStoreProvider: FC = ({ children }) => {
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useStore = () => useContext(AppContext);
