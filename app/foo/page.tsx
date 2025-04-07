import Link from "next/link";
import Foo from "@/app/foo/foo";
import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell pageTitle="Foo">
      <Foo/>
      <Link href="/">Go to Home</Link>
    </AppShell>
  );
}