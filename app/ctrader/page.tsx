import AppShell from "@/components/AppShell";
import Ctrader from "@/app/ctrader/ctrader";

export default function Home() {
  return (
    <AppShell pageTitle="cTrader">
      <Ctrader/>
    </AppShell>
  );
}
