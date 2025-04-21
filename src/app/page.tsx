import { Home } from '@components/Home/Home';

// import { getMemes } from '@graphql/meme';

import memes from '../app/api/db/memes.json';

export default async function HomePage() {
  // const memes = await getMemes();

  return <Home memes={memes} />;
}
