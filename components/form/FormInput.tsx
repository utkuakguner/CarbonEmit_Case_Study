import FormWrapper from "./FormWrapper";
import React from 'react'
import { UseFormSetValue } from "react-hook-form";

interface Props {
    id: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue: UseFormSetValue<any>,
    required?: boolean
}

const FormInput: React.FC<Props> = ({
    id,
    label,
    placeholder,
    type,
    value = '',
    setValue,
    required
}) => {
    return (
        <FormWrapper id={id} label={label}>
            <input
                id={id}
                value={value}
                onChange={(e) => setValue(id, e.target.value)}
                placeholder={placeholder}
                type={type}
                required={required}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </FormWrapper>
    );
};

export default FormInput;
