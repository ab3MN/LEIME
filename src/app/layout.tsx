import { ReactNode } from 'react';
import type { Metadata } from 'next';

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
        <main> {children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
