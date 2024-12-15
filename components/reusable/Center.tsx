import React from 'react';
import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Center: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'grow flex flex-col justify-center items-center',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Center;
