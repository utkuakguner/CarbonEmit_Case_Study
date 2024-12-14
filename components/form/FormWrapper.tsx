import { FieldErrors } from 'react-hook-form';
import React from 'react'
import classNames from 'classnames';

interface Props {
    id: string,
    label?: string,
    children?: React.ReactNode,
    className?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors: FieldErrors<any>,
}

const FormWrapper: React.FC<Props> = ({
    id,
    label,
    children,
    className,
    errors
}) => {
    const error = errors[id]?.message

    return (
        <div className={classNames('grow', className)}>
            <label htmlFor={id} className={
                "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            }>{label}</label>
            {children}
            {error &&
                <div className='text-red-500 text-sm mt-1'>
                    {String(error)}
                </div>
            }
        </div>
    );
};

export default FormWrapper;
