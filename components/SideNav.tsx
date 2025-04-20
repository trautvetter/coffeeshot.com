'use client';

import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import {Badge} from "@cloudscape-design/components";
import {useRouter, usePathname} from 'next/navigation';

export default function SideNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SideNavigation
      activeHref={pathname}
      header={{href: "/", text: "Service name"}}
      onFollow={event => {
        if (!event.detail.external) {
          event.preventDefault();
          router.push(event.detail.href);
        }
      }}
      items={[
        {type: "link", text: "Dashboard", href: "/"},
        {type: "link", text: "88888", href: "/8"},
        {type: "link", text: "Trades", href: "/trades"},
        {type: "link", text: "cTrader", href: "/ctrader"},
        {type: "link", text: "Sheets", href: "/sheets"},
        {type: "link", text: "Economic Events", href: "/events"},
        {type: "divider"},
        {
          type: "link",
          text: "Notifications",
          href: "/notifications",
          info: <Badge color="red">23</Badge>
        },
        {
          type: "link",
          text: "BabyPips Market Hours",
          href: "https://www.babypips.com/tools/forex-market-hours",
          external: true
        },
        {
          type: "link",
          text: "myfxbook",
          href: "https://www.myfxbook.com/forex-economic-calendar",
          external: true
        },
        {
          type: "link",
          text: "Investing.com",
          href: "https://www.investing.com/economic-calendar/",
          external: true
        }
      ]}
    />
  );
}
