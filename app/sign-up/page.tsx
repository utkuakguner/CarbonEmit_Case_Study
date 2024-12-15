'use client';

import { Card, CardBody } from '@nextui-org/card';
import React, { useState } from 'react';
import { object, string } from 'yup';
import { Button } from '@nextui-org/button';
import { TbUserPlus } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import Center from '@/components/reusable/Center';
import Error from '@/components/reusable/Error';
import FormInput from '@/components/form/FormInput';
import FormInputPassword from '@/components/form/FormInputPassword';
import Heading from '@/components/reusable/Heading';
import pages from '@/constants/pages';
import { passwordRegex } from '@/constants/regex';
import { sendSignUpRequest } from '@/utils/helper/request/signUp';

const SignUp: React.FC = () => {
  const t = useTranslations();

  const [error, setError] = useState('');

  const formSchema = object().shape({
    firstName: string().required(t('fieldRequired')),
    lastName: string().required(t('fieldRequired')),
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

  const onSubmit = handleSubmit(async () => {
    const { message } = await sendSignUpRequest({
      name: `${firstName} ${lastName}`,
      email,
      password,
    });

    if (message) {
      setError(message);

      return;
    }

    window.location.href = pages.login;
  });

  const firstName = watch('firstName');

  const lastName = watch('lastName');

  const email = watch('email');

  const password = watch('password');

  return (
    <Center>
      <Card className="max-w-md	w-full p-4">
        <CardBody>
          <div className="flex flex-col gap-5">
            <Heading icon={<TbUserPlus />} title={t('signUp')} />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 grow">
                <FormInput
                  errors={errors}
                  id="firstName"
                  label={t('firstName')}
                  setValue={setValue}
                  value={firstName}
                />
                <FormInput
                  errors={errors}
                  id="lastName"
                  label={t('lastName')}
                  setValue={setValue}
                  value={lastName}
                />
              </div>
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
              {t('signUp')}
            </Button>
          </div>
        </CardBody>
      </Card>
    </Center>
  );
};

export default SignUp;
