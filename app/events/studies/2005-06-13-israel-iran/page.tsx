'use client'

import AppShell from "@/components/AppShell";
import * as React from "react";
import {CurrencyRow, currencyList, UpIcon, DownIcon, FlatIcon} from "@/components/CurrencyMatrixTable";
import dynamic from "next/dynamic";

export default () => {

  const CurrencyMatrixWrapper = dynamic(() => import('@/components/CurrencyMatrixTable'), { ssr: false });

  type Direction = 'UP' | 'DOWN' | 'FLAT';

  const currencyPairMap: Record<string, [Direction, string]> = {
    'EURUSD': ['DOWN', 'https://www.tradingview.com/x/vy6u9gce/'],
    'EURJPY': ['FLAT', 'https://www.tradingview.com/x/dSzNJgZL/'],
    'EURGBP': ['FLAT', 'https://www.tradingview.com/x/CqM4fq4L/'],
    'EURCHF': ['DOWN', 'https://www.tradingview.com/x/icPbIUel/'],
    'EURAUD': ['UP', 'https://www.tradingview.com/x/y3sZLycP/'],
    'EURCAD': ['DOWN', 'https://www.tradingview.com/x/q1IBoWaX/'],
    'EURNZD': ['UP', 'https://www.tradingview.com/x/gPtQCELb/'],

    'USDJPY': ['FLAT', 'https://www.tradingview.com/x/oaBSVkpu/'],
    'USDCHF': ['DOWN', 'https://www.tradingview.com/x/V0FU4O4q/'],
    'USDCAD': ['UP', 'https://www.tradingview.com/x/Mj2vx1lF/'],

    'GBPJPY': ['DOWN', 'https://www.tradingview.com/x/DLpJfcui/'],
    'GBPCHF': ['DOWN', 'https://www.tradingview.com/x/xVC5LMOs/'],
    'GBPAUD': ['UP', 'https://www.tradingview.com/x/XE9c3G09/'],
    'GBPCAD': ['DOWN', 'https://www.tradingview.com/x/n0QWTACW/'],
    'GBPNZD': ['UP', 'https://www.tradingview.com/x/9dMmR8ti/'],
    'GBPUSD': ['DOWN', 'https://www.tradingview.com/x/TQMqvDAO/'],

    'AUDJPY': ['DOWN', 'https://www.tradingview.com/x/7TBnWSo2/'],
    'AUDCHF': ['DOWN', 'https://www.tradingview.com/x/27QPYwem/'],
    'AUDCAD': ['DOWN', 'https://www.tradingview.com/x/2Uxyoro7/'],
    'AUDNZD': ['UP', 'https://www.tradingview.com/x/ABIcM68W/'],
    'AUDUSD': ['DOWN', 'https://www.tradingview.com/x/R6eUP5pw/'],

    'CADJPY': ['DOWN', 'https://www.tradingview.com/x/uuU5GBKZ/'],
    'CADCHF': ['DOWN', 'https://www.tradingview.com/x/UQQy8iXp/'],

    'CHFJPY': ['UP', 'https://www.tradingview.com/x/tcDSenDl/'],

    'NZDJPY': ['DOWN', 'https://www.tradingview.com/x/LZlsPaWD/'],
    'NZDCAD': ['DOWN', 'https://www.tradingview.com/x/YmF0g0l6/'],
    'NZDCHF': ['DOWN', 'https://www.tradingview.com/x/3Fh6FuuL/'],
    'NZDUSD': ['DOWN', 'https://www.tradingview.com/x/XOW9x0ID/'],
  };

  const resolveCurrencyPair = (
    base: string,
    target: string,
    map: Record<string, [Direction, string]>
  ): [Direction, string] | undefined => {
    return map[`${base}${target}`] || map[`${target}${base}`];
  };

  const items: CurrencyRow[] = currencyList.map(base => {
    const row: CurrencyRow = { base };
    currencyList.forEach(target => {
      if (base !== target) {
        const pair = `${base}${target}`;
        const entry = resolveCurrencyPair(base, target, currencyPairMap);
        if (entry) {
          const [direction, url] = entry;
          row[target] = direction === 'UP'
            ? <UpIcon onClick={() => window.open(url, '_blank')} />
            : direction === 'DOWN'
              ? <DownIcon onClick={() => window.open(url, '_blank')} />
              : <FlatIcon onClick={() => window.open(url, '_blank')} />;
        } else {
          row[target] = ''; // fallback if no entry
        }
      }
    });
    return row;
  });

    return (
      <AppShell pageTitle="News Events: Market Reaction Studies">
        <CurrencyMatrixWrapper
          title="Israel attacks Iran - Friday June 13, 2025"
          items={items}
        />
      </AppShell>
    );
  }
