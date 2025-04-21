'use client';

import 'react-loading-skeleton/dist/skeleton.css';

import { FC } from 'react';
import { Card } from '@heroui/react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Props {
  length: number;
}

export const CardSkeleton: FC<Props> = ({ length }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.from({ length }).map((_, i) => (
      <li key={i}>
        <Card
          className="w-full max-w-[350px] space-y-1 p-4 mx-auto"
          radius="lg"
        >
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={30} />
        </Card>
      </li>
    ))}
  </ul>
);
