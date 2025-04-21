import MemeItem from '@components/MemeItem/MemeItem';
import { getMeme } from '@graphql/meme';
import { Params } from 'next/dist/server/request/params';

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meme = await getMeme(id);

  return {
    title: meme.title,
  };
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const memeId = Array.isArray(id) ? id[0] : id;

  const meme = await getMeme(memeId || '');

  return <MemeItem meme={meme} />;
}
