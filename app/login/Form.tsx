'use client'

import Link from 'next/link';

import { useSession } from 'next-auth/react';

import { Input } from '@/app/components';

const loginFormInputs = [
    {
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "janedoes@network.com",
    },
    {
        type: "password",
        name: "password",
        label: "Email",
        placeholder: "••••••••••",
    },
];
const LoginForm = () => {
    const { data } = useSession();
    return (
        <form className="space-y-4 md:space-y-6" action="#">
            {loginFormInputs.map(({ type, name, label, placeholder }) => (
                <Input key={name} name={name} type={type} label={label} placeholder={placeholder} />
            ))}
            <button type="submit" className="btn w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to account</button>
            <p className="text-sm font-light">
                Don't have an account?
                <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Signup here
                </Link>
            </p>
        </form>
    )
};

export default LoginForm
