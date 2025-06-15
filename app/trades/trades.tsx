'use client';

import React, {useEffect, useState} from 'react';
import {Box, ContentLayout, Pagination, SpaceBetween} from '@cloudscape-design/components';
import Button from "@cloudscape-design/components/button";
import FullscreenViewer from "@/app/trades/FullscreenViewer";
import {useGetTradesQuery,} from '@/services/tradeApi'

const Trades: React.FC = () => {
  const {data: trades, isLoading} = useGetTradesQuery();
  // const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [open, setOpen] = useState(false);

  // Fetch local JSON data
  // useEffect(() => {
  //   fetch('/data.json')
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //     .catch((err) => console.error('Error loading JSON:', err));
  // }, []);

  // Handle page change
  const handleChange = ({detail}: { detail: { currentPageIndex: number } }) => {
    setPage(detail.currentPageIndex);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && trades && page < trades.length) {
        setPage((p) => p + 1);
      } else if (e.key === 'ArrowLeft' && page > 1) {
        setPage((p) => p - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, trades && trades.length]);

  const currentData = trades && trades[page - 1];

  return (
    <ContentLayout>
      <SpaceBetween size="s">
        {currentData ? (
          <>
            <Button onClick={() => setOpen(true)}>Open Fullscreen</Button>
            {open && (
              <FullscreenViewer
                imageUrl={currentData.screenshot}
                onClose={() => setOpen(false)}
              />
            )}
            <img
              src={currentData.screenshot ?? ''}
              alt="Responsive image"
              style={{
                width: '85%',
                height: 'fit-content',
                objectFit: 'contain',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                right: 320,
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: 4,
              }}
            >
              {/* Replace with your actual pagination */}
              <Pagination
                currentPageIndex={page}
                pagesCount={trades.length}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <Box variant="h3" textAlign="center">Loading...</Box>
        )}
      </SpaceBetween>
    </ContentLayout>
  );
};

export default Trades;
