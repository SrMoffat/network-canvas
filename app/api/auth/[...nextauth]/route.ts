import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import { loginUser } from '@/lib/api';
import { fetchDefaultRole } from '@/lib';

// @ts-ignore
const handleLogin = async (credentials) => {
  const user = await loginUser({
    email: credentials?.email,
    password: credentials?.password,
  });
  if (user) {
    return user;
  } else {
    return null;
  }
};
const credentialsProvider = CredentialsProvider({
  name: 'Network Canvas',
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: handleLogin,
});
const githubProvider = GithubProvider({
  clientId: process.env.GITHUB_ID ?? '',
  clientSecret: process.env.GITHUB_SECRET ?? ''
});
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    credentialsProvider,
    githubProvider,
  ],
  callbacks: {
    async jwt({ token }) {
      let authToken = token
      const defaultRole = await fetchDefaultRole()
      return {
        ...authToken,
        roleName: defaultRole?.name,
        roleId: defaultRole?.id,
      };
    },
  },
  // pages: {
  //   signIn: '/login'
  // }
});

export { handler as GET, handler as POST };
