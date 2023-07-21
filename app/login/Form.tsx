'use client';

import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

// import { signIn, useSession } from 'next-auth/react';
import { UserContext } from '@/app/components/providers';

import { Input } from '@/app/components';
import { FormEvent, useState, useContext } from 'react';

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
        {loading ? (
            <>
                <span className="loading loading-spinner"></span>
                loading
            </>
        ) : text}
    </button>
    ;
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
    const { normalLogin } = useContext(UserContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [formState, setFormState] = useState<{ [key: string]: string }>({});
    //   const { data: session } = useSession();

    const handleNormalLogin = async (event: FormEvent) => {
        setLoading(true)
        event.preventDefault();
        await normalLogin({
            email: formState?.email,
            password: formState?.password,
        });
        setLoading(false)
    };
    const handleGithubLogin = () => {
        // signIn()
        // console.log('handleGithubLogin', session);
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
        <form onSubmit={handleNormalLogin} className="space-y-4 md:space-y-6" action="#">
            {loginFormInputs.map(({ type, name, label, placeholder }) =>
                <Input key={name} name={name} type={type} label={label} placeholder={placeholder} onChange={updateField} />
            )}
            <LoginButton loading={loading} text="Login to Account" />
            <div className="divider">OR</div>
            <button onClick={handleGithubLogin} type="submit" className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                <AiFillGithub size="25" />
                Login with Github
            </button>
            <FormFooter />
        </form>
    );
};

export default LoginForm;
