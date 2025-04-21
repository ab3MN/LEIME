'use client';

import { memesSelector } from '@redux/selectors/meme.selector';
import { MemeListItem } from './MemeListItem';
import { useAppSelector } from '@redux/hooks';
import { useEffect, useState } from 'react';

export const MemeList = () => {
  const memes = useAppSelector(memesSelector);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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

// export default MemeList;
