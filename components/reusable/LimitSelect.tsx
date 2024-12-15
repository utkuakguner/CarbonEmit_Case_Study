'use client';

import React, { useMemo } from 'react';
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
          color={option === limit ? 'primary' : 'default'}
          size="sm"
          variant="bordered"
          onClick={() => onClick(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default LimitSelect;
