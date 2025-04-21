import clsx from 'clsx';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export const SectionContainer: FC<Props> = ({ children, className = '' }) => (
  <section className={clsx(className, 'mb-4 px-4')}>{children}</section>
);
