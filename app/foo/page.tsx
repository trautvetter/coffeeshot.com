import {FooList} from "@/app/foo/foo";
import AppShell from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell pageTitle="Foo">
      <FooList/>
    </AppShell>
  );
}
