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

    const onClick = (option: number) => {
        if (option === limit) return;

        const url = new URL(window.location.href);

        url.searchParams.set('limit', String(option));

        window.location.href = url.toString();
    }

    return (
        <div className='flex items-center gap-4'>
            {options.map((option: number) => (
                <div
                    key={option}
                    className={classNames('border rounded-lg w-8 h-8 flex items-center justify-center bg-stone-900 duration-200',
                        limit === option ?
                            'border-blue-500 text-blue-500 cursor-not-allowed' : 'border-stone-500 hover:bg-stone-600 text-white cursor-pointer',
                    )}
                    onClick={() => onClick(option)}>
                    {option}
                </div>
            ))}
        </div>
    );
};

export default LimitSelect;
