import { Meme } from 'types';
import fs from 'fs';
import path from 'path';
import { getMemeLikes } from '@utils/getMemeLikes';

const memesPath = path.join(process.cwd(), 'src/app/api/db/memes.json');

export const readMemes = async (): Promise<Meme[]> => {
  const data = await fs.promises.readFile(memesPath, 'utf-8');
  const memes: Meme[] = JSON.parse(data);

  return memes.map((meme) => ({
    ...meme,
    likes: getMemeLikes(meme),
  }));
};

export const writeMemes = async (memes: Meme[]): Promise<void> => {
  try {
    await fs.promises.writeFile(memesPath, JSON.stringify(memes, null, 2));
  } catch (err) {
    console.error(err);
    throw new Error('Failed to save memes');
  }
};
