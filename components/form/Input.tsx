import React from 'react'

interface Props {
    id: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (value: string) => void,
}

const Input: React.FC<Props> = ({
    id,
    placeholder,
    type,
    value = '',
    onChange,
}) => {
    return (
        <input
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            type={type}
            className="bg-gray-50 border border-stone-500 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
    );
};

export default Input;
