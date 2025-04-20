import Link from 'next/link';
import { FC } from 'react';

interface Props {
  href: string;
  label: string;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

export const CustomLink: FC<Props> = ({ href, label, target = '_self' }) => (
  <Link
    className="text-state-600 hover:text-fuchsia-400 font-bold"
    href={href}
    target={target}
  >
    {label}
  </Link>
);
