import { getMemes } from '@graphql/meme';

export default async function TablePage() {
  const memes = await getMemes();

  console.log(memes);

  return <div>Table Page</div>;
}
