'use client';

import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

import { signIn } from 'next-auth/react';

import { Input } from '@/app/components';
import { FormEvent, useState } from 'react';

const loginFormInputs = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'janedoes@network.com',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Email',
    placeholder: '••••••••••',
  },
];

const LoginButton = ({ loading, text }: { loading: boolean, text: string }) =>
  <button className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    {loading ?
      <>
        <span className="loading loading-spinner"></span>
                loading
      </>
      : text}
  </button>
    ;
const LoginWithGithubButton = ({ loading, text, onClick }: { loading: boolean, text: string, onClick: () => void }) => {
  return (
    <button className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={onClick}>
      {loading ?
        <>
          <span className="loading loading-spinner"></span>
                    loading
        </>
        :
        <>
          <AiFillGithub size="25" />
          {text}
        </>
      }
    </button>
  );
};
const FormFooter = () =>
  <p className="text-sm font-light">
        Don't have an account?
    <Link href="/signup" className="pl-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
            Signup
    </Link>
  </p>
    ;
const LoginForm = () => {
  // TODO: Replace with React Hook Form
  const [loading, setLoading] = useState<boolean>(false);
  const [githubLading, setGithubLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<{ [key: string]: string }>({});

  const handleNormalLogin = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    signIn('credentials', {
      email: formState?.email,
      password: formState?.password,

    });
    setLoading(false);

  };
  const handleGithubLogin = () => {
    signIn('github', {
        callbackUrl: '/home'
    });
  };
  const updateField = (event: any) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [event?.target?.name]: event.target.value,
      };
    });
  };
  return (
    <>
      <form onSubmit={handleNormalLogin} className="space-y-4 md:space-y-6" action="#">
        {loginFormInputs.map(({ type, name, label, placeholder }) =>
          <Input key={name} name={name} type={type} label={label} placeholder={placeholder} onChange={updateField} />
        )}
        <LoginButton loading={loading} text="Login to Account" />
      </form>
      <div className="divider">OR</div>
      <LoginWithGithubButton loading={githubLading} text="Login with Github" onClick={handleGithubLogin} />
      <FormFooter />
    </>
  );
};

export default LoginForm;
