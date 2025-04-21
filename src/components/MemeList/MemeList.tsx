'use client';

import { memesSelector } from '@redux/selectors/meme.selector';
import { MemeListItem } from './MemeListItem';
import { useAppSelector } from '@redux/hooks';

export const MemeList = () => {
  const memes = useAppSelector(memesSelector);

  return (
    <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-8 space-y-4">
      {memes.map((meme) => (
        <li key={meme.id}>
          <MemeListItem meme={meme} />
        </li>
      ))}
    </ul>
  );
};
