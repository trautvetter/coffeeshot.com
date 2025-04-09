'use client';

import {AppLayout, ContentLayout, Header, Container} from '@cloudscape-design/components';
import TopNav from "@/components/TopNav";
import React from "react";

export default function UtilsPage() {
  return (
    <>
      <TopNav/>
      <AppLayout
        navigationHide
        toolsHide
        contentType="default"
        headerSelector="#top-navigation"
        content={
          <ContentLayout
            header={<Header variant="h1">Utils</Header>}
          >
            <Container>
              <p>
                Welcome to CoffeeShot! Free utils for registered users, teams and researchers.
              </p>
            </Container>
          </ContentLayout>
        }
      />
    </>
  )
}
