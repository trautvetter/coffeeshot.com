import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized({ token, req }) {
      const isLoggedIn = !!token;
      const isPublic = req.nextUrl.pathname.startsWith("/public");
      return isLoggedIn || isPublic;
    }
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
};
