import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.CLIENT_SECRET ?? '',
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
  ],
  // Add your session configuration here
//   session: {
//     jwt: true,
//   }
};
export default NextAuth(authOptions);