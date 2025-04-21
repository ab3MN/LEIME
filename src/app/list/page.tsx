import { MemeList } from '@components/MemeList/MemeList';

// import { getMemes } from '@graphql/meme';

import memes from '../api/db/memes.json';

export default async function MemeListPage() {
  // const memes = await getMemes();

  return <MemeList memes={memes} />;
}
