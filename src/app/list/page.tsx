import { getMemes, updateMeme } from '@graphql/meme';

export default async function ListPage() {
  try {
    const memes = await getMemes();

    console.log(memes);

    const updatdMemes = await updateMeme('e9ab45b4-e7ee-4d95-a726-b90efc162151', {
      name: 'test update',
      imgUrl: `${process.env.HOST}/images/projectIdea.jpg`,
      likes: 83,
    });

    console.log(updatdMemes);
  } catch (e) {
    console.log(e);
  }

  return <div>List Page</div>;
}
