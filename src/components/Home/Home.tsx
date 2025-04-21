'use client';

import { FC } from 'react';
import { Image } from '@heroui/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Meme } from 'types';
import clsx from 'clsx';
import { buttonStyles } from 'styles';
import { PATH } from '@constants/path';
import Link from 'next/link';
import { SectionContainer } from '@ui/Containers/SectionContainer';

interface Props {
  memes: Meme[];
}

export const Home: FC<Props> = ({ memes }) => {
  const _memes = memes.slice(0, 3);

  return (
    <div className="bg-gray-100">
      <SectionContainer className="bg-blue-800 text-white py-16 text-center">
        <>
          <h2 className="text-4xl font-extrabold mb-4">Welcome to the Meme Website!</h2>
          <p className="mb-6 text-lg">Check out the funniest memes and share them with your friends!</p>

          <Link
            className={clsx(buttonStyles, 'px-8 py-2')}
            href={PATH.LIST}
          >
            Explore
          </Link>
        </>
      </SectionContainer>

      <SectionContainer className="mb-12">
        <>
          <h2 className="text-3xl font-bold text-gray-800 text-center">Popular Memes</h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
            {_memes.map((meme) => (
              <li
                key={meme.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <Image
                    src={meme.imgUrl}
                    alt={meme.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="flex flex-col p-4 h-full flex-1">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{meme.title}</h3>

                  <div className="mt-auto">
                    <Link
                      className={clsx(buttonStyles, 'inline-flex items-center py-2 px-5')}
                      href={`${PATH.LIST}/${meme.id}`}
                    >
                      View Meme
                      <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      </SectionContainer>
    </div>
  );
};
