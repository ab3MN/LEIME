import { Card, CardFooter, CardHeader, Image } from '@heroui/react';
import { FC } from 'react';
import { Meme } from 'types';
import { CustomLink } from '@ui/Link/Link';
import { LikeButton } from '@ui/Buttons/LikeButton';

interface Props {
  memes: Meme[];
}

export const MemeList: FC<Props> = ({ memes }) => {
  return (
    <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-8 space-y-4">
      {memes.map(({ id, name, likes, imgUrl }) => (
        <li key={id}>
          <Card
            className="break-inside-avoid mb-4 relative text-white font-bold"
            as="article"
          >
            <CardHeader className="absolute z-100 top-0 flex-col items-start bg-black/70 rounded ">
              <h4 className="text-sm">
                <CustomLink
                  href={`list/${id}`}
                  label={name}
                />
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt={name}
              className="w-full h-auto rounded"
              src={imgUrl}
            />

            <CardFooter className="flex justify-between items-center absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 p-0">
              <p className="text-xs pl-2">Likes: {likes}</p>
              <LikeButton likes={likes} />
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
};
