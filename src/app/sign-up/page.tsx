'use client'

import { object, string } from "yup";

import Button from "@/components/reusable/Button";
import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import FormInput from "@/components/form/FormInput";
import FormInputPassword from "@/components/form/FormInputPassword";
import Heading from "@/components/reusable/Heading";
import Link from "next/link";
import React from "react";
import { TbUserPlus } from "react-icons/tb";
import pages from "@/constants/pages";
import { passwordRegex } from "@/constants/regex";
import { sendSignUpRequest } from "@/utils/helper/request/signUp";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp: React.FC = () => {
  const t = useTranslations()

  const formSchema = object().shape({
    firstName: string().required(t('fieldRequired')),
    lastName: string().required(t('fieldRequired')),
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

  const onSubmit = handleSubmit(async () => {
    await sendSignUpRequest({
      name: `${firstName} ${lastName}`,
      email,
      password
    })

    window.location.href = pages.login
  })

  const firstName = watch('firstName')

  const lastName = watch('lastName')

  const email = watch('email')

  const password = watch('password')

  return (
    <Center>
      <Card className="max-w-md	w-full">
        <div className="flex flex-col gap-5">
          <Heading title={t('signUp')} icon={<TbUserPlus />} />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 grow">
              <FormInput id='firstName' value={firstName} setValue={setValue} label={t('firstName')} placeholder={t('firstName')} errors={errors} />
              <FormInput id='lastName' value={lastName} setValue={setValue} label={t('lastName')} placeholder={t('lastName')} errors={errors} />
            </div>
            <FormInput id='email' value={email} setValue={setValue} label={t('email')} placeholder={t('email')} errors={errors} />
            <FormInputPassword id='password' value={password} setValue={setValue} label={t('password')} placeholder={t('password')} errors={errors} />
          </div>
          <Button onClick={onSubmit} isLoading={isSubmitting}>
            {t('signUp')}
          </Button>
          <Center className='text-sm underline'>
            <Link href={pages.login}>
              {t('login')}
            </Link>
          </Center>
        </div>
      </Card>
    </Center>
  );
}

export default SignUp