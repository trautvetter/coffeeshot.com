// /pages/oauth/ctrader-redirect.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function CtraderRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;

    // 🔄 Call your backend to exchange the code for a token
    fetch('/api/ctrader/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        // 💾 Store token (e.g. in context, cookie, DB, or localStorage)
        console.log('Access token:', data.access_token);
        // ⏩ Redirect or move on
        router.push('/dashboard');
      });
  }, [searchParams, router]);

  return <p>Authorizing...</p>;
}
