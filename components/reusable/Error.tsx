import React from 'react';

interface Props {
  message?: string;
}

const Error: React.FC<Props> = ({ message }) => {
  if (!message) return null;

  return <div className="text-red-500 text-sm">{message}</div>;
};

export default Error;
