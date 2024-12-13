import React, { useState } from 'react'
import { TbEye, TbEyeOff } from 'react-icons/tb';

import FormWrapper from './FormWrapper';
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
                <input
                    id={id}
                    value={value}
                    onChange={(e) => setValue(id, e.target.value)}
                    placeholder={placeholder}
                    type={isClear ? 'text' : 'password'}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className='absolute top-0 right-0 text-lg cursor-pointer' onClick={() => setIsClear(!isClear)}>
                    {isClear ? <TbEyeOff /> : <TbEye />}
                </div>
            </div>
        </FormWrapper>
    );
};

export default FormInputPassword;
