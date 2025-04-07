import { withAuth } from 'next-auth/middleware';

export const auth = withAuth({
  callbacks: {
    authorized({ token, req }) {
      const isLoggedIn = !!token;
      const isPublicPage = req.nextUrl.pathname.startsWith('/public');
      return isPublicPage || isLoggedIn;
    },
  },
});