'use client'

import { object, string } from "yup";

import Button from "@/components/reusable/Button";
import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import FormInput from "@/components/form/FormInput";
import FormInputPassword from "@/components/form/FormInputPassword";
import Heading from "@/components/reusable/Heading";
import React from "react";
import { TbLogin } from "react-icons/tb";
import { passwordRegex } from "@/constants/regex";
import { useForm } from "react-hook-form";
import { useTranslations } from 'next-intl';
import { yupResolver } from "@hookform/resolvers/yup";

const Login: React.FC = () => {
  const t = useTranslations()

  const formSchema = object().shape({
    email: string().required(t('fieldRequired')).email(t('invalidEmail')),
    password: string().required(t('fieldRequired')).matches(passwordRegex, t('invalidPassword')),
  });

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },

  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(() => {

  })

  const email = watch('email')

  const password = watch('password')

  return (
    <Center>
      <Card className="max-w-md	w-full">
      <div className="flex flex-col gap-5">
          <Heading title={t('login')} icon={<TbLogin />} />
          <div className="flex flex-col gap-4">
            <FormInput id='email' value={email} setValue={setValue} label={t('email')} placeholder={t('email')} errors={errors} />
            <FormInputPassword id='password' value={password} setValue={setValue} label={t('password')} placeholder={t('password')} errors={errors} />
          </div>
          <Button onClick={onSubmit} isLoading={isSubmitting}>
            {t('login')}
          </Button>
        </div>
      </Card>
    </Center>
  );
}

export default Login;