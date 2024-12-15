'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import Center from './Center';

const Unauthorized: React.FC = () => {
  const t = useTranslations();

  return (
    <Center>
      <p className="text-lg mb-5">{t('unauthorizedMessage')}</p>
    </Center>
  );
};

export default Unauthorized;
