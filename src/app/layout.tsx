import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Freckle_Face } from 'next/font/google';

import './global.css';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import clsx from 'clsx';

const freckleFace = Freckle_Face({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Funny Memes',
  description: 'funny memes about programming',
  icons: {
    icon: '/favicon.png',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={clsx(freckleFace.className, 'min-h-[100dvh] flex flex-col')}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
