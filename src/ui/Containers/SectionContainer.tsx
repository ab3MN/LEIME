import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const SectionContainer: FC<Props> = ({ children }) => <section className="mb-4">{children}</section>;
