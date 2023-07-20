import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';


// @ts-ignore
const handleLogin = async (credentials, req) => {
  // Add logic here to look up the user from the credentials supplied
  const res = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: credentials?.email,
      password: credentials?.password,
    }),
  });
  const user = await res.json();
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
    password: { label: 'Password', type: 'password' },
  },
  authorize: handleLogin,
});
const githubProvider = GithubProvider({
  clientId: process.env.CLIENT_ID ?? '',
  clientSecret: process.env.CLIENT_SECRET ?? '',
  authorization: {
    params: {
      prompt: 'consent',
      access_type: 'offline',
      response_type: 'code',
    },
  },
});
  
const handler = NextAuth({
  providers: [
    credentialsProvider,
    // githubProvider

  ],
});

export { handler as GET, handler as POST };