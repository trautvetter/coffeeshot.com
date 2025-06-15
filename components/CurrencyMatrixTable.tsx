'use client';

import * as React from 'react';
import Table from '@cloudscape-design/components/table';
import Header from '@cloudscape-design/components/header';
import {Icon} from "@cloudscape-design/components";

export type CurrencyCode = 'EUR' | 'USD' | 'JPY' | 'GBP' | 'CHF' | 'AUD' | 'CAD' | 'NZD';
export const currencyList: CurrencyCode[] = ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD'];

export interface CurrencyRow {
  base: CurrencyCode;
  [key: string]: React.ReactNode;
}

interface CurrencyMatrixTableProps {
  items: CurrencyRow[];
  title: string;
}

const getFlagEmoji = (currency: CurrencyCode): string => {
  const map: Record<CurrencyCode, string> = {
    USD: '🇺🇸',
    EUR: '🇪🇺',
    JPY: '🇯🇵',
    GBP: '🇬🇧',
    CHF: '🇨🇭',
    AUD: '🇦🇺',
    CAD: '🇨🇦',
    NZD: '🇳🇿',
  };
  return map[currency] || '';
};

export const UpIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: "pointer" }}>
    <Icon name="caret-up-filled" variant="success" />
  </span>
);

export const DownIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: "pointer" }}>
    <Icon name="caret-down-filled" variant="error" />
  </span>
);

export const FlatIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <span onClick={onClick} style={{ cursor: "pointer" }}>
    <Icon name="subtract-minus" variant="normal" />
  </span>
);

// --- Core Table Component ---
const CurrencyMatrixTable: React.FC<CurrencyMatrixTableProps> = ({ items, title }) => {
  const columnDefinitions = [
    {
      id: 'base',
      header: '',
      cell: (item: CurrencyRow) =>  {
        return <div style={{ textAlign: 'center' }}>{item.base}</div>
      },
      isRowHeader: true,
    },
    ...currencyList.map(currency => ({
      id: currency,
      header: (
        <span>
          {getFlagEmoji(currency)} {currency}
        </span>
      ),
      cell: (item: CurrencyRow) => {
        const value = item[currency] as string;
        // return <Box>{value}</Box>;
        return <div style={{ textAlign: 'center' }}>{value}</div>
      },
    }))
  ];

  return (
    <Table
      columnDefinitions={columnDefinitions}
      items={items}
      header={<Header>{title}</Header>}
      stickyHeader
      stripedRows
    />
  );
};

// --- Wrapper Component for Page Use ---
interface CurrencyMatrixWrapperProps {
  title: string;
  items: CurrencyRow[];
}

const CurrencyMatrixWrapper: React.FC<CurrencyMatrixWrapperProps> = ({ title, items }) => {
  return <CurrencyMatrixTable items={items} title={title} />;
};

export default CurrencyMatrixWrapper;
