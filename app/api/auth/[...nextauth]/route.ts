import NextAuth from "next-auth";
// import type {JWTCallback, SessionCallback, SignInCallback, RedirectCallback} from "next-auth";

import CognitoProvider from "next-auth/providers/cognito";
import type {Provider} from 'next-auth/providers';

const useSecureCookies = !!process.env.VERCEL_URL;

if (!process.env.COGNITO_CLIENT_ID) {
  console.warn('Missing environment variable "COGNITO_CLIENT_ID"');
}
if (!process.env.COGNITO_CLIENT_SECRET) {
  console.warn('Missing environment variable "COGNITO_CLIENT_SECRET"');
}
if (!process.env.COGNITO_ISSUER) {
  console.warn('Missing environment variable "COGNITO_ISSUER"');
}
if (!process.env.SECRET) {
  console.warn('Missing environment variable "SECRET"');
}

const providers: Provider[] = [
  CognitoProvider({
    clientId: process.env.COGNITO_CLIENT_ID as string,
    clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
    issuer: process.env.COGNITO_ISSUER as string,
  }),
];

// const authCallbacks = {
//   authorized({auth: session, request: {nextUrl}}) {
//     const isLoggedIn = !!session?.user;
//     const isPublicPage = nextUrl.pathname.startsWith('/public');
//
//     return isPublicPage || isLoggedIn;
//
//      // Redirect unauthenticated users to login page
//   },
  // async jwt({token, account, user}: JWTCallback) {
  //   if (account && user) {
  //     token.id = user.id;
  //     token.email = user.email;
  //     token.accessToken = account.access_token;
  //     token.idToken = account.id_token;
  //   }
  //   return token;
  // },

  // async session({session, token}: SessionCallback) {
  //   if (token) {
  //     session.user.id = token.id;
  //     session.user.email = token.email;
  //     session.accessToken = token.accessToken;
  //     session.idToken = token.idToken;
  //   }
  //   return session;
  // },

  // async signIn({user, account}: SignInCallback) {
  //   return true;
  // },

  // async redirect({url, baseUrl}: RedirectCallback) {
  //   return baseUrl;
  // },
// };


const handler = NextAuth({
  providers,
  secret: process.env.SECRET as string,
  session: {
    strategy: 'jwt',
  },
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: '/',
        domain: useSecureCookies ? '.solutions-subdomain-auth.vercel.sh' : undefined,
        secure: useSecureCookies,
      },
    },
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
  }
});

export { handler as GET, handler as POST };