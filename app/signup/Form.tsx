'use client';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiFillGithub } from 'react-icons/ai';

import { signUpUser } from '@/lib/api';
import { Input } from '@/app/components';

const signUpFormInputs = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    placeholder: 'Jane Does',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'janedoes@network.com',
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: '••••••••••',
  },
];

const SignupButton = ({ loading, text }: { loading: boolean, text: string }) =>
  <button className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    {loading ?
      <>
        <span className="loading loading-spinner"></span>
        loading
      </>
      : text}
  </button>
  ;

const SignupWithGithubButton = ({ text, onClick }: { text: string, onClick: () => void }) => {
  return (
    <button className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={onClick}>
      <AiFillGithub size="25" />
      {text}
    </button>
  );
};

const FormFooter = () =>
  <p className="text-sm font-light">
    Already have an account?
    <Link href="/signup" className="pl-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
      Login
    </Link>
  </p>
  ;

const SignUpForm = () => {
  // TODO: Replace with React Hook Form
  const { push } = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<{ [key: string]: string }>({});

  const handleNormalSignup = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    await signUpUser({
      username: formState?.username,
      email: formState?.email,
      password: formState?.password,
    });
    setLoading(false);
    // TODO: Create session and redirect to home
    push('/login');
  };
  const handleGithubSignUp = () => {
    signIn('github', {
      callbackUrl: '/home',
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
      <form onSubmit={handleNormalSignup} className="space-y-4 md:space-y-6" action="#">
        {signUpFormInputs.map(({ type, name, label, placeholder }) =>
          <Input key={name} name={name} type={type} label={label} placeholder={placeholder} onChange={updateField} />
        )}
        <SignupButton loading={loading} text="Create Account" />
      </form>
      <div className="divider">OR</div>
      <SignupWithGithubButton text="Signup with Github" onClick={handleGithubSignUp} />
      <FormFooter />
    </>
  );
};

export default SignUpForm;
