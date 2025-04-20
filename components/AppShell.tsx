"use client"

import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import {
  AppLayoutToolbar,
  BreadcrumbGroup,
  ContentLayout,
  Header,
  HelpPanel,
  SplitPanel,
} from '@cloudscape-design/components'
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

import {ReduxProvider} from '@/lib/providers';
import {AppLayoutProps} from "@cloudscape-design/components/app-layout/interfaces";

type AppShellProps = {
  children: React.ReactNode;
  pageTitle: string;
  navigationDefaultOpen?: boolean;
  splitDefaultOpen?: boolean;
};

export type AppShellRef = {
  openSplitPanel: () => void;
  closeSplitPanel: () => void;
  openSplitPanelWith: (panelHeader: string, node: React.ReactNode) => void;
};

const AppShell = forwardRef((
  {children, pageTitle, navigationDefaultOpen = true, splitDefaultOpen = false}: AppShellProps,
  ref
) => {
  const [navigationIsOpen, setNavigationIsOpen] = useState(navigationDefaultOpen);
  const [splitPanelOpen, setSplitPanelOpen] = useState(splitDefaultOpen);
  const [panelHeader, setPanelHeader] = useState("Info Panel");
  const [panelContent, setPanelContent] = useState<React.ReactNode>(null);
  const [panelSize, setPanelSize] = useState(320);

  useEffect(() => {

  }, []);

  useImperativeHandle(ref, () => ({
    openSplitPanel: () => setSplitPanelOpen(true),
    closeSplitPanel: () => setSplitPanelOpen(false),
    openSplitPanelWith: (panelHeader: string, node: React.ReactNode) => {
      setPanelHeader(panelHeader);
      setPanelContent(node);
      setSplitPanelOpen(true);
    },
  }));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSplitPanelOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);


  return (
    <><TopNav/>
      <AppLayoutToolbar
        breadcrumbs={<BreadcrumbGroup
          items={[
            {text: 'Home', href: '/'},
            {text: 'Service', href: '#'},
          ]}/>}
        navigationOpen={navigationIsOpen}
        onNavigationChange={({detail}) => setNavigationIsOpen(detail.open)}

        navigation={SideNav()}
        //toolsOpen={true}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content={<ContentLayout header={<Header variant="h1">{pageTitle}</Header>}>
          <ReduxProvider>{children}</ReduxProvider>
        </ContentLayout>}
        splitPanelOpen={splitPanelOpen}
        onSplitPanelToggle={({detail}) => setSplitPanelOpen(detail.open)}
        splitPanelPreferences={{
          position: 'side'
        }}
        splitPanelSize={panelSize}
        onSplitPanelResize={(event: CustomEvent<AppLayoutProps.SplitPanelResizeDetail>) => {
          setPanelSize(event.detail.size);
        }}
        onSplitPanelPreferencesChange={({detail}) => {
          console.log(detail);
        }}
        splitPanel={
          <SplitPanel
            header={panelHeader}
          >{panelContent}</SplitPanel>
        }
      />
    </>
  );
});

export default AppShell;
