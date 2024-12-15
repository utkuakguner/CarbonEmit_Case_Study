import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import React from 'react';
import { Input } from '@nextui-org/input';

interface Props {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
}

const FormInput: React.FC<Props> = ({
  id,
  label,
  placeholder,
  type,
  value = '',
  setValue,
  errors,
}) => {
  const errorMessage = errors[id]?.message;

  return (
    <Input
      errorMessage={String(errorMessage)}
      id={id}
      isInvalid={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setValue(id, e.target.value)}
    />
  );
};

export default FormInput;
