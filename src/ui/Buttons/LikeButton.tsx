'use client';

import { Button } from '@heroui/react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { FC } from 'react';

interface Props {
  likes: number;
  onClick?: () => void;
}

export const LikeButton: FC<Props> = ({ likes, onClick }) => (
  <Button onClickCapture={onClick}>
    {likes ?
      <HeartSolid
        width={24}
        height={24}
        className="text-red-400 hover:text-red-600"
      />
    : <HeartIcon
        width={24}
        height={24}
        className=" hover:fill-red-600"
      />
    }
  </Button>
);
