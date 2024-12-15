'use client'

import Button from './Button';
import Cookie from "js-cookie";
import React from 'react';
import { TbLogout } from 'react-icons/tb';
import cookieNames from '@/constants/cookieNames';
import pages from '@/constants/pages';
import { useTranslations } from 'next-intl';

const LogoutButton: React.FC = () => {
    const t = useTranslations()

    const onClick = () => {
        Cookie.set(cookieNames.accessToken, '', { expires: 0 });

        window.location.href = pages.login
    }

    return (
        <Button onClick={onClick} className='bg-gray-50 hover:bg-gray-200 text-black font-bold py-1.5 px-4 rounded flex items-center gap-2'>
            <TbLogout />
            {t('logout')}
        </Button>
    );
};

export default LogoutButton;
