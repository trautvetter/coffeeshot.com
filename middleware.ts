import { withAuth } from "next-auth/middleware";

const PUBLIC_PATHS = ["/about"];
const AUTHENTICATED_PATHS = ["/utils"];
const REQUIRED_GROUPS = ["ROLE_CFX_SUPER_ADMIN"]; // adjust to your needs

export default withAuth({
  callbacks: {
    authorized({ token, req }) {
      const path = req.nextUrl.pathname;

      const isLoggedIn = !!token;
      const userGroups = Array.isArray(token?.groups) ? token.groups : [];

      console.log("🔐 Middleware auth check:", {
        path,
        isLoggedIn,
        groups: token?.groups,
        userGroups,
      });

      const isPublic = PUBLIC_PATHS.some(p => path.startsWith(p));
      if (isPublic) return true;

      const isAuthenticatedOnly = AUTHENTICATED_PATHS.some(p => path.startsWith(p));
      if (isAuthenticatedOnly) return isLoggedIn;

      if (!isLoggedIn) return false;
      return userGroups.some(group => REQUIRED_GROUPS.includes(group));
    }
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"]
};
