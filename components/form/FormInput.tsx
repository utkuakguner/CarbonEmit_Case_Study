import { FieldErrors, UseFormSetValue } from "react-hook-form";

import FormWrapper from "./FormWrapper";
import Input from "./Input";
import React from 'react'

interface Props {
    id: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue: UseFormSetValue<any>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: FieldErrors<any>,
}

const FormInput: React.FC<Props> = ({
    id,
    label,
    placeholder,
    type,
    value = '',
    setValue,
    errors
}) => {
    return (
        <FormWrapper id={id} label={label} errors={errors}>
            <Input
                id={id}
                value={value}
                onChange={(value) => setValue(id, value)}
                placeholder={placeholder}
                type={type}
            />
        </FormWrapper>
    );
};

export default FormInput;
