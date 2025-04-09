'use client'

import { useState } from "react";
import AppShell from "@/components/AppShell";
import Myfxbook_com from "@/app/events/myfxbook_com";
import Investing_com from "@/app/events/investing_com";
import { Tabs } from "@cloudscape-design/components";

export default function Home() {
  const [activeTabId, setActiveTabId] = useState('myfxbook');

  return (
    <AppShell pageTitle="Economic Events">
      <Tabs
        activeTabId={activeTabId}
        onChange={({ detail }) => setActiveTabId(detail.activeTabId)}
        tabs={[
          {
            label: "Myfxbook.com",
            id: "myfxbook",
          },
          {
            label: "Investing.com",
            id: "investing",
          },
        ]}
      />
      <div style={{ display: activeTabId === 'myfxbook' ? 'block' : 'none' }}>
        <Myfxbook_com />
      </div>
      <div style={{ display: activeTabId === 'investing' ? 'block' : 'none' }}>
        <Investing_com />
      </div>
    </AppShell>
  );
}
