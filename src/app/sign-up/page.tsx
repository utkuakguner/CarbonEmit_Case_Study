'use client'

import { object, string } from "yup";

import Button from "@/components/reusable/Button";
import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import FormInput from "@/components/form/FormInput";
import FormInputPassword from "@/components/form/FormInputPassword";
import Heading from "@/components/reusable/Heading";
import { TbUserPlus } from "react-icons/tb";
import { passwordRegex } from "@/constants/regex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignUp() {
  const formSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    password: string().required().matches(passwordRegex, '123'),
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

  const firstName = watch('firstName')

  const lastName = watch('lastName')

  const email = watch('email')

  const password = watch('password')

  return (
    <Center>
      <Card className="min-w-96">
        <div className="flex flex-col gap-5">
          <Heading title='Sign up' icon={<TbUserPlus />} />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FormInput id='firstName' value={firstName} setValue={setValue} label='First name' />
              <FormInput id='lastName' value={lastName} setValue={setValue} label='Last name' />
            </div>
            <FormInput id='email' value={email} setValue={setValue} label='Email' />
            <FormInputPassword id='password' value={password} setValue={setValue} label='Password' />
          </div>
          <Button onClick={onSubmit} isLoading={isSubmitting}>
            Create account
          </Button>
        </div>
      </Card>
    </Center>
  );
}
