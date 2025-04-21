'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Meme } from 'types';
import { addMemes } from './slices/meme.slice';

interface Props {
  children: ReactNode;
  initialState?: {
    memes: Meme[];
  };
}

export const ReduxProvider = ({ children, initialState }: Props) => {
  useEffect(() => {
    store.dispatch(addMemes(initialState?.memes || []));
    // eslint-disable-next-line
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
