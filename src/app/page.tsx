import { getMemes } from '@graphql/meme';

export default async function RootPage() {
  const memes = await getMemes();

  console.log(memes);

  return <div>Home Page</div>;
}
