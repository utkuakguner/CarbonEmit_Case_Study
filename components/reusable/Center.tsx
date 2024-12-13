import React from 'react';

interface CardProps {
    children?: React.ReactNode;
}

const Center: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="grow flex justify-center items-center">
            {children}
        </div>
    );
};

export default Center;
