import AppShell from "@/components/AppShell";
import CtraderRedirect from "@/app/ctrader/redirect/ctrader-redirect";
import Link from "next/link";
import {Suspense} from 'react';

export default function Home() {
  const params = new URLSearchParams({
    client_id: process.env.CTRADER_CLIENT_ID!,
    redirect_uri: "http://localhost:3000/ctrader/redirect",
    scope: "accounts",
    product: "web"
  });

  return (
    <AppShell pageTitle="cTrader">
      <Link
        href={`https://id.ctrader.com/my/settings/openapi/grantingaccess?${params.toString()}`}
      >
        Get token
      </Link>

      <Suspense fallback={<p>Authorizing...</p>}>
        <CtraderRedirect/>
      </Suspense>
    </AppShell>
  );
}
