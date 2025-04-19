import { MemeTable } from '@components/MemeTable/MemeTable';
import { getMemes } from '@graphql/meme';
import { Meme } from 'types';

export default async function TablePage() {
  const memes: Meme[] = await getMemes();

  return <MemeTable memes={memes} />;
}
