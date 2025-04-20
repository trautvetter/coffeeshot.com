'use client'

import AppShell, {AppShellRef} from "@/components/AppShell";
import Calendar from "@/app/8/calendar";
import {useEffect, useRef, useState} from "react";
import Panel from "@/app/8/panel";
import {eightyear} from "@/prisma/generated/client";
import {format} from 'date-fns';

export default function Home() {

  const appShellRef = useRef<AppShellRef>(null);
  const [selectedDay, setSelectedDay] = useState<eightyear | null>(null);

  useEffect(() => {
    if (!selectedDay) return;
    const readable = format(new Date(selectedDay.date), "EEE, MMM do yyyy");
    appShellRef.current?.openSplitPanelWith(readable, (
      <Panel key={`panel-${selectedDay.id}`} />
    ));
  }, [selectedDay]);

  return (
    <AppShell ref={appShellRef} pageTitle="8" navigationDefaultOpen={false}>
      <Calendar
        onDayClickAction={(eightyear) => {
          setSelectedDay(eightyear);
        }}
      />
    </AppShell>
  );
}
