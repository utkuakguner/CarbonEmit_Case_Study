'use client'

import { object, string } from "yup";

import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import FormInput from "@/components/form/FormInput";
import FormInputPassword from "@/components/form/FormInputPassword";
import Heading from "@/components/reusable/Heading";
import { TbLogin } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const formSchema = object().shape({
    email: string().required(),
    password: string().required(),
  });

  const {
    setValue,
    // handleSubmit,
    watch,
    // formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const email = watch('email')

  const password = watch('password')

  return (
    <Center>
      <Card className="min-w-96">
        <Heading title={'Login'} icon={<TbLogin />} />
        <FormInput id='email' value={email} setValue={setValue} label='Email' />
        <FormInputPassword id='password' value={password} setValue={setValue} label='Password' />
      </Card>
    </Center>
  );
}
