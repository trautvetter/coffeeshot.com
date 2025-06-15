'use client'

import {CollectionPreferencesProps} from "@cloudscape-design/components/collection-preferences";
import {TableProps} from "@cloudscape-design/components";
import ColumnDefinition = TableProps.ColumnDefinition;

export const columnDefinitions: ColumnDefinition<any>[] = [
  {
    id: "name",
    header: "Name",
    cell: item => item.name,
    isRowHeader: true
  },
  {
    id: "alt",
    header: "Alt",
    cell: item => item.alt
  },
  {
    id: "description",
    header: "Description",
    cell: item => item.description || "-"
  },
  {
    id: "type",
    header: "Type",
    cell: item => item.type
  },
  {
    id: "size",
    header: "Size",
    cell: item => item.size
  }
];

export function getMatchesCountText(count: number) {
  return count === 1 ? "1 match" : `${count} matches`;
}

export const paginationLabels = {
  nextPageLabel: "Next page",
  previousPageLabel: "Previous page",
  pageLabel: pageNumber => `Page ${pageNumber} of all pages`
};

export const collectionPreferencesProps: CollectionPreferencesProps<any> = {
  title: "Preferences",
  confirmLabel: "Confirm",
  cancelLabel: "Cancel",
  pageSizePreference: {
    title: "Page size",
    options: [
      {value: 10, label: "10 items"},
      {value: 20, label: "20 items"}
    ]
  },
  contentDisplayPreference: {
    title: "Visible columns",
    options: [
      {id: "name", label: "Name", alwaysVisible: true},
      {id: "alt", label: "Alt"},
      {id: "description", label: "Description"},
      {id: "type", label: "Type"},
      {id: "size", label: "Size"}
    ]
  },
  stickyColumnsPreference: {
    firstColumns: {
      title: "Stick first column(s)",
      description: "Keep first columns visible while scrolling",
      options: [
        {label: "None", value: 0},
        {label: "First column", value: 1}
      ]
    },
    lastColumns: {
      title: "Stick last column",
      description: "Keep the last column visible while scrolling",
      options: [
        {label: "None", value: 0},
        {label: "Last column", value: 1}
      ]
    }
  }
};
