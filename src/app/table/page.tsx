import { MemeTable } from '@components/MemeTable/MemeTable';
// import { getMemes } from '@graphql/meme';

import memes from '../api/db/memes.json';

export default async function MemeTablePage() {
  // const memes = await getMemes();

  return <MemeTable memes={memes} />;
}
