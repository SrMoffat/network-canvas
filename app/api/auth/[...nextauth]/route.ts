import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import { loginUser } from '@/lib/api';
import { fetchDefaultLanguage, fetchDefaultRole, fetchDefaultTheme } from '@/lib';
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
  clientSecret: process.env.GITHUB_SECRET ?? '',
});
const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    credentialsProvider,
    githubProvider,
  ],
  callbacks: {
    async jwt({ token, user }) {
      if(user){
        const defaultRole = await fetchDefaultRole();
        const defaultLanguage = await fetchDefaultLanguage();
        const defaultTheme = await fetchDefaultTheme();
        token.roleName = defaultRole?.name;
        token.roleDescription = defaultRole?.description;
        token.roleId = defaultRole?.id;
        token.languageName = defaultLanguage?.name;
        token.languageCode = defaultLanguage?.code;
        token.themeName = defaultTheme?.name;
        token.themeId = defaultTheme?.id;
      }
      return token;
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user.roleName = token.roleName;
      // @ts-ignore
      session.user.roleId = token.roleId;
      // @ts-ignore
      session.user.roleDescription = token.roleDescription;
      // @ts-ignore
      session.user.languageName = token.languageName;
      // @ts-ignore
      session.user.languageCode = token.languageCode;
      // @ts-ignore
      session.user.themeName = token.themeName;
      // @ts-ignore
      session.user.themeId = token.themeId;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
