'use client';

import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Meme } from 'types';
import { addMemes } from '../redux/slices/meme.slice';

export interface ReduxProviderProps {
  children: ReactNode;
  initialState: {
    memes: Meme[];
  };
}

export const ReduxProvider = ({ children, initialState }: ReduxProviderProps) => {
  useEffect(() => {
    store.dispatch(addMemes(initialState.memes));
    // eslint-disable-next-line
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
