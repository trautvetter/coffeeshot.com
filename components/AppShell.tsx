// components/layout/AppShell.tsx
"use client"
import React, {useState} from 'react';
import {
  AppLayoutToolbar,
  BreadcrumbGroup,
  ContentLayout,
  Header,
  HelpPanel,
  SplitPanel,
} from '@cloudscape-design/components'
import AuthLinks from "@/components/AuthLinks";
import TopNav from "@/components/TopNav";

export default function AppShell({children, pageTitle}) {
  const [navigationIsOpen, setNavigationIsOpen] = useState(true);

  return (
    <><TopNav/><AppLayoutToolbar
      breadcrumbs={<BreadcrumbGroup
        items={[
          {text: 'Home', href: '/'},
          {text: 'Service', href: '#'},
        ]}/>}
      navigationOpen={navigationIsOpen}
      onNavigationChange={({detail}) => setNavigationIsOpen(detail.open)}

      navigation={AuthLinks()}
      //toolsOpen={true}
      tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
      content={<ContentLayout header={<Header variant="h1">{pageTitle}</Header>}>
        {children}
      </ContentLayout>}
      splitPanel={<SplitPanel header="Split panel header">Split panel content</SplitPanel>}/></>
  )
}
