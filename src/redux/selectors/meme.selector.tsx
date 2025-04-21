import { Meme } from 'types';

export const memesSelector = (state: { memes: { memes: Meme[] } }) => state.memes.memes;
