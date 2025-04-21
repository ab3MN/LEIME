import { Navigation } from '@components/Navigation/Navigation';
import { PATH } from '@constants/path';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <header className="flex justify-between items-center px-2 border-b-2 border-state-500">
    <h1>
      <Link href={PATH.HOME}>
        <Image
          src="/images/logo.jpg"
          width={48}
          height={48}
          alt="logo"
          priority
          loading="eager"
        />
      </Link>
    </h1>

    <Navigation />
  </header>
);
