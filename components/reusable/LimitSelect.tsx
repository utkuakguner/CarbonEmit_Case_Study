'use client';

import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Button } from '@nextui-org/button';

interface Props {
  limit: number;
}

const LimitSelect: React.FC<Props> = ({ limit }) => {
  const options = useMemo<number[]>(() => [5, 10, 25], []);

  const onClick = (option: number) => {
    if (option === limit) return;

    const url = new URL(window.location.href);

    url.searchParams.set('limit', String(option));

    window.location.href = url.toString();
  };

  return (
    <div className="flex items-center gap-4">
      {options.map((option: number) => (
        <Button
          key={option}
          isIconOnly
          className={classNames(
            'border flex items-center justify-center bg-stone-900 duration-200',
            limit === option
              ? 'border-blue-500 text-blue-500 cursor-not-allowed'
              : 'border-stone-500 hover:bg-stone-600 text-white cursor-pointer',
          )}
          size="sm"
          variant="flat"
          onClick={() => onClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default LimitSelect;
