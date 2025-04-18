import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';
import { Header } from '@components/Header/Header';

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
      <body>
        <Header />

        <main className="px-4"> {children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
