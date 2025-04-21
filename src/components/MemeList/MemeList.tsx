import { FC } from 'react';
import { Meme } from 'types';
import { MemeListItem } from './MemeListItem';

interface Props {
  memes: Meme[];
}

export const MemeList: FC<Props> = ({ memes }) => {
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
