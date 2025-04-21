import { Button } from '@heroui/react';
import { FC } from 'react';
import clsx from 'clsx';

interface Props {
  type: 'button' | 'submit' | 'reset';
  label: string;
  px?: number;
  auto?: boolean;
  onClick?: () => void;
}

export const MainButton: FC<Props> = ({ type, label, px = 50, auto = false, onClick = () => {} }) => (
  <Button
    type={type}
    onPress={onClick}
    className={clsx(
      'bg-stone-800 hover:bg-fuchsia-400 font-bold rounded-2xl text-white',
      `px-[${px}px]`,
      auto && 'mx-auto block',
    )}
  >
    {label}
  </Button>
);
