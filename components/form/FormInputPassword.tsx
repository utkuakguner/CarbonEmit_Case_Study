import React, { useState } from 'react'
import { TbEye, TbEyeOff } from 'react-icons/tb';

import FormWrapper from './FormWrapper';
import Input from './Input';
import { UseFormSetValue } from "react-hook-form";

interface Props {
    id: string;
    label?: string;
    placeholder?: string;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue: UseFormSetValue<any>,
}

const FormInputPassword: React.FC<Props> = ({
    id,
    label,
    placeholder,
    value = '',
    setValue,
}) => {
    const [isClear, setIsClear] = useState(false)

    return (
        <FormWrapper id={id} label={label}>
            <div className='relative'>
                <Input
                    id={id}
                    value={value}
                    onChange={(value) => setValue(id, value)}
                    placeholder={placeholder}
                    type={isClear ? 'text' : 'password'}
                />
                <div className='absolute bottom-3 right-3 text-lg cursor-pointer' onClick={() => setIsClear(!isClear)}>
                    {isClear ? <TbEyeOff /> : <TbEye />}
                </div>
            </div>
        </FormWrapper>
    );
};

export default FormInputPassword;
