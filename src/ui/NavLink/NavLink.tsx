'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface Props {
  href: string;
  title: string;
}

export const NavLink: FC<Props> = ({ href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`pe-2 ${pathname === href ? 'text-zinc-400' : 'text-state-600'}  hover:text-zinc-400 font-bold`}
      href={href}
    >
      {title}
    </Link>
  );
};
