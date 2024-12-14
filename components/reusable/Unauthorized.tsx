import Center from './Center';
import Link from 'next/link';
import React from 'react';
import pages from '@/constants/pages';
import { useTranslations } from 'next-intl';

const Unauthorized: React.FC = () => {
    const t = useTranslations()

    return (
        <Center>
            <p className='text-lg mb-5'>
                {t('unauthorizedMessage')}
            </p>
            <Link href={pages.login} className='underline text-blue-500'>
                {t('login')}
            </Link>
        </Center>
    );
};

export default Unauthorized;
