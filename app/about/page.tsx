'use client';

import {AppLayout, ContentLayout, Header, Container} from '@cloudscape-design/components';
import TopNav from "@/components/TopNav";
import React from "react";

export default function AboutPage() {
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
            header={<Header variant="h1">About Us</Header>}
          >
            <Container>
              <p>
                Welcome to CoffeeShot! We use smart technology to improve trading performance.
                Our platform integrates data, insights, and intuitive tools for teams and researchers.
              </p>
            </Container>
          </ContentLayout>
        }
      />
    </>
  )
}
