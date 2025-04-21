import { Meme } from 'types';
import { generateRandomNumbers } from './generateRandomNumbers';

const MAX_LIKES = 99;

export const getMemeLikes = (meme: Meme) => (meme.likes !== -1 ? meme.likes : generateRandomNumbers(MAX_LIKES));
