'use client'

import { object, string } from "yup";

import Button from "@/components/reusable/Button";
import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import FormInput from "@/components/form/FormInput";
import FormInputPassword from "@/components/form/FormInputPassword";
import Heading from "@/components/reusable/Heading";
import { TbLogin } from "react-icons/tb";
import { passwordRegex } from "@/constants/regex";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const formSchema = object().shape({
    email: string().required('Email is required').email('Field must be a valid email address'),
    password: string().required('Password is required').matches(passwordRegex, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
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
      <Card className="min-w-96">
        <div className="flex flex-col gap-5">
          <Heading title='Login' icon={<TbLogin />} />
          <div className="flex flex-col gap-4">
            <FormInput id='email' value={email} setValue={setValue} label='Email' errors={errors} />
            <FormInputPassword id='password' value={password} setValue={setValue} label='Password' errors={errors} />
          </div>
          <Button onClick={onSubmit} isLoading={isSubmitting}>
            Login
          </Button>
        </div>
      </Card>
    </Center>
  );
}
