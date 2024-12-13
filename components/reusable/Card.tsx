import React from 'react';
import classNames from 'classnames';

interface CardProps {
    children?: React.ReactNode;
    className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={classNames("p-6 border border-stone-700 bg-stone-950 rounded-xl", className)}>
            {children}
        </div>
    );
};

export default Card;
