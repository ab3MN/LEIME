'use client';

import { Table, TableBody, TableRow, TableCell, TableHeader, TableColumn, Button } from '@heroui/react';
import { CustomLink } from '@ui/Link/Link';
import { FC } from 'react';
import { Meme } from 'types';
import { PencilIcon } from '@heroicons/react/24/solid';

interface Props {
  memes: Meme[];
}

const headers = ['id', 'name', 'image', 'likes', 'actions'];

export const MemeTable: FC<Props> = ({ memes }) => {
  return (
    <Table aria-label="Memes table">
      <TableHeader>
        {headers.map((header) => (
          <TableColumn
            key={header}
            className="uppercase text-center"
          >
            {header}
          </TableColumn>
        ))}
      </TableHeader>

      <TableBody>
        {memes.map(({ id, name, imgUrl, likes }, i) => (
          <TableRow key={id}>
            <TableCell className="text-center">{i + 1}</TableCell>
            <TableCell className="text-center whitespace-nowrap w-auto max-w-full">{name}</TableCell>
            <TableCell className="text-center">
              <CustomLink
                href={imgUrl}
                target="_blank"
                label="Image"
              />
            </TableCell>
            <TableCell className="text-center">{likes}</TableCell>
            <TableCell className="text-center">
              <Button>
                <PencilIcon className="h-5 w-5 text-state-600 hover:text-zinc-400" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
