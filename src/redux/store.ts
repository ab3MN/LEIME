import { configureStore } from '@reduxjs/toolkit';
import memeReducer from './slices/meme.slice';

export const createStore = (preloadedState?: unknown) => {
  return configureStore({
    reducer: {
      memes: memeReducer,
    },
    preloadedState,
  });
};

export const store = createStore();

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
