'use client';

import AppShell from "@/components/AppShell";
import Sheets from "@/app/sheets/sheets";

export default function Home() {
  return (
    <AppShell pageTitle="Foo">
      <Sheets/>
    </AppShell>
  );
}
