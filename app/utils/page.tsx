'use client';

import {AppLayout, Container, ContentLayout, Header} from '@cloudscape-design/components';
import TopNav from "@/components/TopNav";
import React from "react";
import {ReduxProvider} from "@/lib/providers";
import {ProductInfo} from "@/components/products/ProductInfo";

export default function UtilsPage() {
  return (
    <>
      <ReduxProvider>
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
                <div>
                  <ProductInfo id={Number("1")}/>
                  <ProductInfo id={Number("2")}/>
                </div>
              </Container>
            </ContentLayout>
          }
        />
      </ReduxProvider>
    </>
  )
}
