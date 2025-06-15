import AppShell from "@/components/AppShell";
import CollectionHooksTable from "@/app/trades/tableFilter";
import Trades from "@/app/trades/trades";

export default function Home() {
  return (
    <AppShell pageTitle="Trades">
      {/*<CollectionHooksTable/>*/}
      <Trades/>
    </AppShell>
  );
}
