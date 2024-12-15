'use client';

import Cookie from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { TbLogout } from 'react-icons/tb';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/button';

import cookieNames from '@/constants/cookieNames';
import pages from '@/constants/pages';

const LogoutButton: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const t = useTranslations();

  const onClick = () => {
    Cookie.set(cookieNames.accessToken, '', { expires: 0 });
    window.location.href = pages.login;
  };

  useEffect(() => {
    setIsAuthenticated(!!Cookie.get(cookieNames.accessToken));
  }, []);

  if (!isAuthenticated) return null;

  return (
    <Button
      color="default"
      endContent={<TbLogout />}
      variant="bordered"
      onPress={onClick}
    >
      {t('logout')}
    </Button>
  );
};

export default LogoutButton;
