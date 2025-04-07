// components/dashboard/Overview.tsx
"use client"
import React from 'react';
import { Container, Header, SpaceBetween } from '@cloudscape-design/components';

const DashboardOverview: React.FC = () => {
  return (
    <SpaceBetween size="l">
      <Container
        header={<Header variant="h2">Welcome</Header>}
      >
        This is your dashboard overview. Add widgets, metrics, or charts here.
      </Container>

      <Container
        header={<Header variant="h2">System Status</Header>}
      >
        Everything is running smoothly. No issues detected.
      </Container>
    </SpaceBetween>
  );
};

export default DashboardOverview;
