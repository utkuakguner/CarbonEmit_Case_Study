import React from 'react'

interface Props {
    id: string,
    label?: string,
    children?: React.ReactNode,
    className?: string
}

const FormWrapper: React.FC<Props> = ({
    id,
    label,
    children,
    className
}) => {
    return (
        <div className={className}>
            <label htmlFor={id} className={
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            }>{label}</label>
            {children}
        </div>
    );
};

export default FormWrapper;
