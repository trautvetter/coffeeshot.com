'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  Header,
  Box,
  SpaceBetween,
  Container,
} from '@cloudscape-design/components';

const SHEET_ID = '1Qe6dIlaK6da6PS0oqWqAXJphjP0LHIJoOA_ph7pX260';
const API_KEY = 'AIzaSyBKaUAOv1pU27UWDV6tprl2R8nOMIdz33I';
const RANGE = 'Edge!A1:C35';
const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

const Sheets = () => {
  const [columnDefs, setColumnDefs] = useState<string[]>([]);
  const [items, setItems] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.values) {
          const [headerRow, ...rows] = data.values;
          setColumnDefs(headerRow);

          const parsedRows = rows.map((row, rowIndex) => {
            const rowObj: Record<string, string> = { id: String(rowIndex) };
            headerRow.forEach((header, index) => {
              rowObj[header] = row[index] || '';
            });
            return rowObj;
          });

          setItems(parsedRows);
        }
      } catch (err) {
        console.error('Error fetching Google Sheets data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <SpaceBetween size="l">
        <Header variant="h1">Google Sheets Viewer</Header>

        <Table
          items={items}
          columnDefinitions={columnDefs.map(col => ({
            id: col,
            header: col,
            cell: (item: Record<string, string>) => item[col] || '',
            sortingField: col,
          }))}
          sortingDisabled
          variant="borderless"
          stripedRows
          stickyHeader
          resizableColumns
          header={<Header>Sheet Data</Header>}
          empty={<Box textAlign="center">No data available.</Box>}
        />
      </SpaceBetween>
    </Container>
  );
};

export default Sheets;
