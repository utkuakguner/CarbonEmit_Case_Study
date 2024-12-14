import React from 'react';
import classNames from 'classnames';

interface CardProps {
    children?: React.ReactNode;
    className?: string

}

const Center: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={classNames("grow flex justify-center items-center", className)}>
            {children}
        </div>
    );
};

export default Center;
