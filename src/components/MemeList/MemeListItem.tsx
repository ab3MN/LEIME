'use client';

import { Card, CardFooter, CardHeader, Image } from '@heroui/react';
import { LikeButton } from '@ui/Buttons/LikeButton';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, memo, ReactNode } from 'react';
import { baseLink } from 'styles';
import { Meme } from 'types';

interface Props {
  meme: Meme;
}

const MemeListItemComponent: FC<Props> = ({ meme }) => {
  const { likes, title, id, imgUrl } = meme;

  return (
    <Card
      className="break-inside-avoid mb-4 relative text-white font-bold"
      as="article"
    >
      <CardHeader className="absolute z-100 top-0 flex-col items-start bg-black/70 rounded ">
        <h4 className="text-sm p-4">
          <Link
            className={clsx(baseLink, 'text-fuchsia-500 ')}
            href={`list/${id}`}
          >
            {title}
          </Link>
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={title}
        className="w-full h-auto rounded"
        src={imgUrl}
      />

      <CardFooter className="flex justify-between items-center absolute bg-black/40 bottom-0 z-100 border-t-1 border-default-600 dark:border-default-100 py-2">
        <p className="text-xs pl-2">Likes: {likes}</p>
        <LikeButton likes={likes} />
      </CardFooter>
    </Card>
  );
};

export const MemeListItem = memo(MemeListItemComponent) as (props: Props) => ReactNode;
