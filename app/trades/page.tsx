import AppShell from "@/components/AppShell";
import Trades from "@/app/trades/trades";

export default function Home() {
  return (
    <AppShell pageTitle="Trades">
      <Trades/>
    </AppShell>
  );
}
