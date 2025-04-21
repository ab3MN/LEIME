'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { Table, TableBody, TableRow, TableCell, TableHeader, TableColumn, Button, useDisclosure } from '@heroui/react';
import { PencilIcon } from '@heroicons/react/24/solid';
import { CustomModal } from '@ui/Modal/Modal';
import { MemesForm } from '@components/MemesForm/MemesForm';

import { useAppSelector } from '@redux/hooks';
import { memesSelector } from '@redux/selectors/meme.selector';

import { Meme } from 'types';
import { baseLink } from 'styles';
import { withHydration } from 'hoc/withHydration';
import { useDragScroll } from '@hooks/useDragScroll';

const headers = ['id', 'name', 'image', 'likes', 'actions'];

const MemeTable = () => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  const memes = useAppSelector(memesSelector);

  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  const handleClose = () => {
    onOpenChange();
    setSelectedMeme(null);
  };

  const scrollRef = useDragScroll();

  return (
    <>
      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll overflow-y-hidden cursor-grab active:cursor-grabbing"
      >
        <Table
          aria-label="Memes table"
          className="min-w-[600px]"
        >
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
      </div>

      {isOpen && selectedMeme && (
        <CustomModal
          isOpen={isOpen}
          title="Edit Meme"
          onOpenChange={handleClose}
        >
          <MemesForm
            meme={selectedMeme}
            closeModal={handleClose}
          />
        </CustomModal>
      )}
    </>
  );
};

export default withHydration(MemeTable);
