import { Input } from '@heroui/react';
import clsx from 'clsx';
import { memo } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  err: string;
  type?: string;
  placeholder?: string;
  isValid?: boolean;
  defaultValue?: string;
}
const LabeledInputComponent = <T extends FieldValues>(props: Props<T>) => {
  const { name, label, register, type = 'text', err, defaultValue = '', placeholder = '' } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={name}
        className="pl-1 text-sm font-medium text-fuchsia-500"
      >
        {label}
      </label>
      <Input
        id={name}
        isInvalid={!!err}
        {...(register ? register(name) : { name })}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="text-gray-800 border-fuchsia-500 border-2 rounded-md p-2"
      />
      <p className={clsx('text-red-400  rounded-md pt-2 invisible', err.length && 'visible')}>{err ? err : 'a'}</p>
    </div>
  );
};

export const LabeledInput = memo(LabeledInputComponent) as <T extends FieldValues>(props: Props<T>) => React.ReactNode;
