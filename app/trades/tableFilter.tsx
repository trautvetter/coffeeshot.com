'use client';

import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

import React, {useState} from 'react';
import {useCollection} from '@cloudscape-design/collection-hooks';

// import allItems from './data';
import {collectionPreferencesProps, columnDefinitions, getMatchesCountText, paginationLabels} from './table-config';

type TableItem = {
  name: string;
  alt: string;
  description: string;
  type: string;
  size: string;
};

const
  allItems: TableItem[] = [
    {
      name: "Item 1",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 2",
      alt: "Second",
      description: "This is the second item",
      type: "1B",
      size: "Large"
    },
    {
      name: "Item 3",
      alt: "Third",
      description: "sec",
      type: "1A",
      size: "Large"
    },
    {
      name: "Item 4",
      alt: "Fourth",
      description: "This is the fourth item",
      type: "2A",
      size: "Small"
    },
    {
      name: "Item 5",
      alt: "-",
      description:
        "This is the fifth item with a longer description",
      type: "2A",
      size: "Large"
    },
    {
      name: "Item 6",
      alt: "Sixth",
      description: "This is the sixth item",
      type: "1A",
      size: "Small"
    }];


function EmptyState({title, subtitle, action}) {
  return (
    <Box textAlign="center" color="inherit">
      <Box variant="strong" textAlign="center" color="inherit">
        {title}
      </Box>
      <Box variant="p" padding={{bottom: 's'}} color="inherit">
        {subtitle}
      </Box>
      {action}
    </Box>
  );
}

export default function CollectionHooksTable() {
  const [preferences, setPreferences] = useState({
    pageSize: 2,
    contentDisplay: [
      {id: 'name', visible: true},
      {id: 'alt', visible: true},
      {id: 'description', visible: true},
    ],
  });
  const {items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps} = useCollection(
    allItems,
    {
      filtering: {
        empty: <EmptyState title="No instances" action={<Button>Create instance</Button>} subtitle={undefined}/>,
        noMatch: (
          <EmptyState
            title="No matches"
            action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>} subtitle={undefined}/>
        ),
      },
      pagination: {pageSize: preferences.pageSize},
      sorting: {},
      selection: {},
    }
  );
  const {selectedItems} = collectionProps;
  return (
    <Table<TableItem>
      {...collectionProps}
      selectionType="multi"
      header={
        <Header
          counter={selectedItems?.length ? `(${selectedItems.length}/${allItems.length})` : `(${allItems.length})`}
        >
          Instances
        </Header>
      }
      columnDefinitions={columnDefinitions}
      columnDisplay={preferences.contentDisplay}
      items={items}
      pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels}/>}
      filter={
        <TextFilter
          {...filterProps}
          countText={getMatchesCountText(filteredItemsCount ?? 0)}
          filteringAriaLabel="Filter instances"
        />
      }
      preferences={
        <CollectionPreferences
          {...collectionPreferencesProps}
          preferences={preferences}
          //onConfirm={({detail}) => setPreferences(detail)}
          // onConfirm={(event: { detail: typeof preferences }) => setPreferences(event.detail)}
          // onConfirm={(event) => setPreferences({
          //   pageSize: event.detail.pageSize ?? 10,
          //   contentDisplay: event.detail.contentDisplay
          // })}
        />
      }
    />
  );
}
