import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Freckle_Face } from 'next/font/google';

import './global.css';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import clsx from 'clsx';
import { ReduxProvider } from '@redux/providers';
import { getMemes } from '@graphql/meme';

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

const RootLayout = async ({ children }: { children: ReactNode }) => {
  try {
    const memes = await getMemes();

    const initialState = { memes };

    return (
      <ReduxProvider initialState={initialState}>
        <html lang="en">
          <body className={clsx(freckleFace.className, 'min-h-[100dvh] flex flex-col relative')}>
            <Header />
            <main> {children}</main>
            <Footer />
          </body>
        </html>
      </ReduxProvider>
    );
  } catch {
    return (
      <html lang="en">
        <body className={clsx(freckleFace.className, 'min-h-[100dvh] flex flex-col relative')}>
          <Header />
          <main> {children}</main>
          <Footer />
        </body>
      </html>
    );
  }
};

export default RootLayout;
