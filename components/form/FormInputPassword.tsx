'use client';

import { FieldErrors, UseFormSetValue } from 'react-hook-form';
import React, { useState } from 'react';
import { TbEye, TbEyeOff } from 'react-icons/tb';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

interface Props {
  id: string;
  label?: string;
  placeholder?: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: FieldErrors<any>;
}

const FormInputPassword: React.FC<Props> = ({
  id,
  label,
  placeholder,
  value = '',
  setValue,
  errors,
}) => {
  const [isClear, setIsClear] = useState(false);

  const errorMessage = errors[id]?.message;

  return (
    <Input
      endContent={
        <Button
          isIconOnly
          size="sm"
          variant="light"
          onClick={() => setIsClear(!isClear)}
        >
          {isClear ? <TbEyeOff /> : <TbEye />}
        </Button>
      }
      errorMessage={String(errorMessage)}
      id={id}
      isInvalid={!!errorMessage}
      label={label}
      placeholder={placeholder}
      type={isClear ? 'text' : 'password'}
      value={value}
      onChange={(e) => setValue(id, e.target.value)}
    />
  );
};

export default FormInputPassword;
