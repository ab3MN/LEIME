'use client';

import { FC } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { Meme } from 'types';
import { Button, Image } from '@heroui/react';
import clsx from 'clsx';
import { buttonStyles } from 'styles';

interface Props {
  meme: Meme;
}

export const MemeItem: FC<Props> = ({ meme }) => {
  return (
    <div className="max-w-[400px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={meme.imgUrl}
        alt={meme.title}
        className="max-w-full h-auto"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{meme.title}</h2>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <HeartIcon className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-xl font-medium text-gray-800">{meme.likes}</span>
          </div>
          <Button
            type="button"
            className={clsx(buttonStyles, 'px-8 py-2')}
          >
            Like
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MemeItem;
