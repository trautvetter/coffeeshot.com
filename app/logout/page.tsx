'use client';

import { useEffect } from "react";
import {signOut} from "next-auth/react";
import {getCognitoLogoutUrl} from "@/lib/auth/helpers";

export default function SignOutRedirectPage() {
  useEffect(() => {
    signOut({ redirect: false }).then(() => {
      window.location.href = getCognitoLogoutUrl(window.location.origin)
    });
  }, []);

  return <p>Redirecting to sign-in...</p>;
}
