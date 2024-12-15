'use client'

import React, { useMemo } from 'react';

import classNames from 'classnames';

interface Props {
    limit: number
}

const LimitSelect: React.FC<Props> = ({ limit }) => {
    const options = useMemo<number[]>(() => [
        5, 10, 25
    ], [])

    return (
        <div className='flex items-center gap-4'>
            {options.map((option: number) => (
                <div key={option} className={classNames('border rounded-lg w-8 h-8 flex items-center justify-center',
                    limit === option ?
                        'border-blue-500 text-blue-500' : 'border-stone-500 text-white ',
                )}>
                    {option}
                </div>
            ))}
        </div>
    );
};

export default LimitSelect;
