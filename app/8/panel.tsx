'use client';

import * as React from "react";
import Toggle from "@cloudscape-design/components/toggle";
import {Container, ContentLayout, Header} from "@cloudscape-design/components";
import {useSelector} from "react-redux";
import {RootState} from "@/lib/store/store";
import {useGetEightyearsQuery, useUpdateEightyearMutation} from "@/services/eightyearApi";
import EightYearProgress from "@/components/widget/EightYearProgress";

export default function Panel() {
  const selectedId = useSelector((state: RootState) => state.panel.selectedId);
  const [updateEightyear] = useUpdateEightyearMutation();
  const {data: eightyears} = useGetEightyearsQuery();
  const eightyear =
    eightyears?.find(e => e.id === selectedId);

  const handleToggle = async (newState: boolean) => {
    if (!eightyear) return;

    try {
      await updateEightyear({
        ...eightyear,
        checkedoff: newState,
      }).unwrap();
      // setChecked(newState);
    } catch (err: any) {
      console.error("Failed to update:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <ContentLayout
      header={
        <Container
          header={
            <Header variant="h2" description="Progress">
              8 year plan
            </Header>
          }
        >
          <EightYearProgress/>
        </Container>
      }
    >

      <Container
        header={
          <Header variant="h2" description="Today">
            Daily plan
          </Header>
        }
      >
        <Toggle
          onChange={({detail}) => handleToggle(detail.checked)}
          checked={eightyear?.checkedoff ?? false}
        >
          Checked off
        </Toggle>
      </Container>
    </ContentLayout>
  );
}
