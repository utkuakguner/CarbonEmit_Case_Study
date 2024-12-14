import React, { useMemo } from 'react';

import Spinner from './Spinner';
import classNames from 'classnames';

interface CardProps {
    children?: React.ReactNode;
    className?: string
    onClick?: () => void
    isLoading?: boolean
}

const Button: React.FC<CardProps> = ({ children, className, onClick, isLoading }) => {
    const Content = useMemo(() => {
        if (isLoading) return <Spinner />

        return children
    }, [children, isLoading])

    return (
        <button className={classNames(
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            className
        )} onClick={onClick}>
            {Content}
        </button>

    );
};

export default Button;
