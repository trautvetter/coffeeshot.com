import AppShell from "@/components/AppShell";
import DashboardOverview from "@/components/dashboard/Overview";

export default function Home() {
  return (
    <AppShell pageTitle="Dashboard">
      <DashboardOverview/>
    </AppShell>
  );
}
