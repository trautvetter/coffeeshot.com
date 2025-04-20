'use client'

import * as React from "react";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Link from "@cloudscape-design/components/link";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Header from "@cloudscape-design/components/header";

import {eightyear} from "@/prisma/generated/client";
import {useGetEightyearsQuery, useUpdateEightyearMutation} from "@/services/eightyearApi";
import {StatusIndicator} from "@cloudscape-design/components";
import { setSelectedId } from "@/lib/data/slices/panelSlice";
import { useDispatch } from "react-redux";

export default function Calendar({onDayClickAction}: { onDayClickAction: (day: eightyear) => void }) {
  const {data: eightyears, isLoading} = useGetEightyearsQuery();
  const [updateEightyear] = useUpdateEightyearMutation();
  const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const dispatch = useDispatch();
  const handleClick = async (day: eightyear | null) => {
    if (!day) return;
    //console.log('Clicked day:', day);
    dispatch(setSelectedId(day.id));

    const updatedDay = {...day, checkedoff: true}; // optimistic value
    (!day.checkedoff)
    {
      try {
        await updateEightyear({
          ...updatedDay,
          checkedoff: true,
        }).unwrap();
      } catch (err: any) {
        console.error("Failed to update:", JSON.stringify(err, null, 2));
      }
    }

    onDayClickAction(updatedDay); // 👈 trigger the panel from here
  };

  function groupDatesByMonth(records: eightyear[]): { label: string; records: (eightyear | null)[] }[] {
    const grouped: { label: string; records: (eightyear | null)[] }[] = [];
    const monthBuckets = new Map<string, eightyear[]>();

    // Group records by month label
    records.forEach(record => {
      if (!record.date) return;

      const dateObj = new Date(record.date);
      const label = dateObj.toLocaleString('default', {month: 'short', year: 'numeric'});

      if (!monthBuckets.has(label)) {
        monthBuckets.set(label, []);
      }

      monthBuckets.get(label)!.push(record);
    });

    let isFirstMonth = true;

    for (const [label, monthRecords] of monthBuckets.entries()) {
      const row: (eightyear | null)[] = new Array(37).fill(null);

      // Determine where to start placing the dates
      let startIndex = 0;

      if (isFirstMonth) {
        startIndex = 28; // March 2025 starts on MON 24th at index 28
        isFirstMonth = false;
      } else {
        const firstDayStr = monthRecords[0]?.day ?? 'MON';
        startIndex = weekdays.indexOf(firstDayStr);
      }

      // Place records into the row starting from startIndex
      monthRecords.forEach((record, i) => {
        const index = startIndex + i;
        if (index < 37) {
          row[index] = record;
        }
      });

      grouped.push({label, records: row});
    }

    return grouped;
  }

  const months = groupDatesByMonth(eightyears ?? []);

  function generateCalendarColumns() {

    const columns: any = [];

    // First column: month label
    columns.push({
      id: 'month',
      header: '',
      isRowHeader: true,
      width: 10,
      cell: (item) => <code>{item.label}</code>,
    });

    // Next 37 columns: day cells with weekday headers
    for (let i = 0; i < 37; i++) {
      columns.push({
        id: `day-${i + 1}`,
        header: <code>{weekdays[i % 7].charAt(0)}</code>,
        width: 15,
        // maxWidth: 20,
        cell: (item) => {
          const day = item.records[i];

          return day?.checkedoff ? (
            <Link
              onFollow={() =>
                handleClick(day)
              }
            >
              {/*<Icon name="check"/>*/}
              <StatusIndicator></StatusIndicator>
            </Link>
          ) : (
            <Link
              onFollow={() =>
                handleClick(day)
              }
            >
              {day?.date ? String(new Date(day.date).getDate()).padStart(2, '0') : ''}
            </Link>
          );
        },
      });
    }

    return columns;
  }

  return (
    <Table
      renderAriaLive={({
                         firstIndex,
                         lastIndex,
                         totalItemsCount
                       }) =>
        `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
      }
      columnDefinitions={generateCalendarColumns()}
      enableKeyboardNavigation
      stickyColumns={{first: 1, last: 9}}
      stickyHeader
      stripedRows
      items={months}
      loading={isLoading}
      loadingText="Loading 8 year calendar"
      sortingDisabled
      variant="full-page"
      contentDensity="compact"
      empty={
        <Box
          margin={{vertical: "xs"}}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No resources</b>
          </SpaceBetween>
        </Box>
      }
      header={<Header> Simple table </Header>}
    />
  );
}
