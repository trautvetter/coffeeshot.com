import NextAuth from "next-auth";
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
if (!process.env.SESSION_DOMAIN) {
  console.warn('Missing environment variable "SESSION_DOMAIN"');
}

const providers: Provider[] = [
  CognitoProvider({
    clientId: process.env.COGNITO_CLIENT_ID as string,
    clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
    issuer: process.env.COGNITO_ISSUER as string,
  }),
];

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
        domain: useSecureCookies ? '.coffeeshot.vercel.app' : undefined,
        secure: useSecureCookies,
      },
    },
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      // console.log("🪵>> JWT callback", { account, profile });
      if (account && profile) {
        token.id = profile.sub;
        token.email = profile.email;
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.groups = profile["cognito:groups"] || [];

        // ✅ Log the groups here
        console.log("🔐 Cognito groups from profile:", profile["cognito:groups"]);
      }
      return token;
    },

    // async session({ session, token }) {
    //   session.user = session.user || {};
    //   session.user.id = token.id;
    //   session.user.email = token.email;
    //   session.accessToken = token.accessToken;
    //   session.idToken = token.idToken;
    //   session.groups = token.groups || [];
    //   return session;
    // },
  },
});

export { handler as GET, handler as POST };
