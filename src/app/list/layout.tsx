import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { SectionContainer } from '@ui/Containers/SectionContainer';

export const metadata: Metadata = {
  title: 'Funny memes list',
};

const ListLayout = ({ children }: { children: ReactNode }) => {
  return <SectionContainer>{children}</SectionContainer>;
};

export default ListLayout;
