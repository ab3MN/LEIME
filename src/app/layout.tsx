import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './global.css';
import { Header } from '@components/Header/Header';
import { Providers } from './providers';

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
        <Providers>
          <Header />
          <main className="px-4"> {children}</main>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
