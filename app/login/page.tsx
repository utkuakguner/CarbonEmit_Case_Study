'use client';

import { Card, CardBody } from '@nextui-org/card';
import React, { useState } from 'react';
import { object, string } from 'yup';
import { Button } from '@nextui-org/button';
import Cookie from 'js-cookie';
import { TbLogin } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import Center from '@/components/reusable/Center';
import Error from '@/components/reusable/Error';
import FormInput from '@/components/form/FormInput';
import FormInputPassword from '@/components/form/FormInputPassword';
import Heading from '@/components/reusable/Heading';
import cookieNames from '@/constants/cookieNames';
import pages from '@/constants/pages';
import { passwordRegex } from '@/constants/regex';
import { sendLoginRequest } from '@/utils/helper/request/login';
import { sendUserDataRequest } from '@/utils/helper/request/userData';

const Login: React.FC = () => {
  const t = useTranslations();

  const [error, setError] = useState('');

  const formSchema = object().shape({
    email: string().required(t('fieldRequired')).email(t('invalidEmail')),
    password: string()
      .required(t('fieldRequired'))
      .matches(passwordRegex, t('invalidPassword')),
  });

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const email = watch('email');

  const password = watch('password');

  const onSubmit = handleSubmit(async () => {
    const { data: accessToken, message } = await sendLoginRequest({
      email,
      password,
    });

    if (message) {
      setError(message);

      return;
    }

    Cookie.set(cookieNames.accessToken, accessToken, { expires: 7 });

    const { data: userData } = await sendUserDataRequest(accessToken);

    window.location.href = userData.admin ? pages.admin : pages.user;
  });

  return (
    <Center>
      <Card className="max-w-md	w-full p-4">
        <CardBody>
          <div className="flex flex-col gap-5">
            <Heading icon={<TbLogin />} title={t('login')} />
            <div className="flex flex-col gap-4">
              <FormInput
                errors={errors}
                id="email"
                label={t('email')}
                setValue={setValue}
                value={email}
              />
              <FormInputPassword
                errors={errors}
                id="password"
                label={t('password')}
                setValue={setValue}
                value={password}
              />
            </div>
            <Error message={error} />
            <Button color="primary" isLoading={isSubmitting} onClick={onSubmit}>
              {t('login')}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Login;
