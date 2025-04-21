'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { baseLink } from 'styles/links';

interface Props {
  href: string;
  title: string;
}

export const NavLink: FC<Props> = ({ href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(baseLink, pathname === href && 'text-fuchsia-400')}
      href={href}
    >
      {title}
    </Link>
  );
};
