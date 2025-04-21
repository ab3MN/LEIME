import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Meme } from 'types';

export interface MemeState {
  memes: Meme[];
}

const createInitialState = (initialData?: MemeState): MemeState => ({
  memes: initialData?.memes || [],
});

const createMemeSlice = () =>
  createSlice({
    name: 'memes',
    initialState: createInitialState(),
    reducers: {
      addMemes: (state, { payload }: PayloadAction<Meme[]>) => {
        state.memes = payload;
      },

      updateMemeById: (state, { payload }: PayloadAction<Meme>) => {
        state.memes = state.memes.map((meme) => (meme.id === payload.id ? payload : meme));
      },
    },
  });

export const memeSlice = createMemeSlice();

export const { addMemes, updateMemeById } = memeSlice.actions;

export default memeSlice.reducer;
