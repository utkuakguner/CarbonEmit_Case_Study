'use client';

import Cookie from 'js-cookie';
import React from 'react';
import { TbLogout } from 'react-icons/tb';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/button';

import cookieNames from '@/constants/cookieNames';
import pages from '@/constants/pages';

const LogoutButton: React.FC = () => {
  const t = useTranslations();

  const isAuthenticated = Cookie.get(cookieNames.accessToken);

  const onClick = () => {
    Cookie.set(cookieNames.accessToken, '', { expires: 0 });
    window.location.href = pages.login;
  };

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
