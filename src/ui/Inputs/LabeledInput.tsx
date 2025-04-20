import { Input } from '@heroui/react';
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
    <div className="flex flex-col gap-1 pb-4 w-full">
      <label
        htmlFor={name}
        className="pl-1 text-sm font-medium text-gray-700 dark:text-gray-300"
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
        className="text-gray-800 dark:text-white rounded"
        errorMessage={err}
      />
    </div>
  );
};

export const LabeledInput = memo(LabeledInputComponent) as <T extends FieldValues>(props: Props<T>) => React.ReactNode;
