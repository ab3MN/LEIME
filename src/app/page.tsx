import { getMemes } from 'graphql/meme';

export default async function Page() {
  const memes = await getMemes();

  console.log(memes);

  return <div>Home Page</div>;
}
