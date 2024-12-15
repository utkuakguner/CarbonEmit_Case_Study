import React from 'react';
import classNames from 'classnames';

interface Props {
    title: string;
    icon: React.ReactNode;
    className?: string
}

const Heading: React.FC<Props> = ({ title, icon, className }) => {
    return (
        <div className={classNames("flex items-center gap-3", className)}>
            <div className='text-2xl'>{icon}</div>
            <div className='text-xl font-bold'>{title}</div>
        </div>
    );
};

export default Heading;
