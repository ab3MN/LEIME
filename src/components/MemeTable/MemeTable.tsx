'use client';

import { Table, TableBody, TableRow, TableCell, TableHeader, TableColumn, Button, useDisclosure } from '@heroui/react';
import { FC, useState } from 'react';
import { Meme } from 'types';
import { PencilIcon } from '@heroicons/react/24/solid';
import { CustomModal } from '@ui/Modal/Modal';
import { MemesForm } from '@components/MemesForm/MemesForm';
import Link from 'next/link';
import clsx from 'clsx';
import { baseLink } from 'styles';

interface Props {
  memes: Meme[];
}

const headers = ['id', 'name', 'image', 'likes', 'actions'];

export const MemeTable: FC<Props> = ({ memes }) => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  return (
    <>
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
          {memes.map((meme, i) => (
            <TableRow key={meme.id}>
              <TableCell className="text-center">{i + 1}</TableCell>
              <TableCell className="text-center whitespace-nowrap w-auto max-w-full">{meme.title}</TableCell>
              <TableCell className="text-center">
                <Link
                  className={clsx(baseLink, 'text-center')}
                  href={meme.imgUrl}
                  target="_blank"
                >
                  Image Url
                </Link>
              </TableCell>
              <TableCell className="text-center">{meme.likes}</TableCell>
              <TableCell className="text-center">
                <Button
                  onPress={() => {
                    onOpen();
                    setSelectedMeme(meme);
                  }}
                >
                  <PencilIcon className="h-5 w-5 text-state-600 hover:text-fuchsia-400" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isOpen && selectedMeme && (
        <CustomModal
          isOpen={isOpen}
          title="Edit Meme"
          onOpenChange={() => {
            onOpenChange();
            setSelectedMeme(null);
          }}
        >
          <MemesForm meme={selectedMeme} />
        </CustomModal>
      )}
    </>
  );
};
