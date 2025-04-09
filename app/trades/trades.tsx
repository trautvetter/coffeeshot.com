'use client';

import React, { useState, useEffect } from 'react';
import { Pagination, Container, Box, Header, SpaceBetween } from '@cloudscape-design/components';

const Trades: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);

  // Fetch local JSON data
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  // Handle page change
  const handleChange = ({ detail }: { detail: { currentPageIndex: number } }) => {
    setPage(detail.currentPageIndex);
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && page < data.length) {
        setPage((p) => p + 1);
      } else if (e.key === 'ArrowLeft' && page > 1) {
        setPage((p) => p - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, data.length]);

  const currentData = data[page - 1];

  return (
    <Container
      header={
        <Header
          variant="h1"
          description="Use arrow keys or pagination control below"
        >
          Paginated Viewer
        </Header>
      }
    >
      <SpaceBetween size="l">
        <Pagination
          currentPageIndex={page}
          pagesCount={data.length}
          onChange={handleChange}
        />

        {currentData ? (
          <Box textAlign="center">
            <img
              src={currentData.image}
              alt={`Image for Page ${page}`}
              style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'contain' }}
            />
            <Box variant="p" margin={{ top: 's' }}>{currentData.description}</Box>
          </Box>
        ) : (
          <Box variant="h3" textAlign="center">Loading...</Box>
        )}
      </SpaceBetween>
    </Container>
  );
};

export default Trades;
