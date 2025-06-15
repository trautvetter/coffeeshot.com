'use client'

import AppShell from "@/components/AppShell";
import Overview from "@/app/dashboard/Overview";

import {useGetEightyearsQuery, useUpdateEightyearMutation} from "@/services/eightyearApi";

export default function Home() {
  const {data: eightyears, isLoading} = useGetEightyearsQuery();
  const eightyear =
    eightyears?.find(e => e.id === 32);

  return (
    <AppShell pageTitle="Dashboard">
      <Overview/>
    </AppShell>
  );
}
