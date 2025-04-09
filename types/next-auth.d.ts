// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    idToken?: string;
    groups?: string[];
    user: {
      id?: string;
      email?: string;
      name?: string;
    };
  }

  interface JWT {
    accessToken?: string;
    idToken?: string;
    groups?: string[];
    id?: string;
    email?: string;
  }
}