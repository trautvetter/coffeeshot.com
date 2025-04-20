'use client'

import * as React from "react";
import Board, {BoardProps} from "@cloudscape-design/board-components/board";
import BoardItem from "@cloudscape-design/board-components/board-item";
import Header from "@cloudscape-design/components/header";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import TradingViewWidget from "@/components/chart/detailed";

type BoardItemData = {
  title: string;
  content: React.ReactNode;
};

export default () => {
  const [items, setItems] = React.useState<BoardProps.Item<BoardItemData>[]>([
    {
      id: "1",
      rowSpan: 4,
      columnSpan: 1,
      data: { title: "Demo 1", content: <TradingViewWidget timezone="New Zealand/Auckland" /> }
    },
    {
      id: "2",
      rowSpan: 4,
      columnSpan: 1,
      data: { title: "Demo 2", content: "Second item" }
    },
    {
      id: "3",
      rowSpan: 4,
      columnSpan: 1,
      data: { title: "Demo 3", content: "Third item" }
    }
  ]);
  return (
    <Board<BoardItemData>
      renderItem={(item, actions) => (
        <BoardItem
          header={<Header>{item.data.title}</Header>}
          i18nStrings={{
            dragHandleAriaLabel: "Drag handle",
            dragHandleAriaDescription:
              "Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard. Be sure to temporarily disable any screen reader navigation feature that may interfere with the functionality of the arrow keys.",
            resizeHandleAriaLabel: "Resize handle",
            resizeHandleAriaDescription:
              "Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard. Be sure to temporarily disable any screen reader navigation feature that may interfere with the functionality of the arrow keys."
          }}
          settings={
            <ButtonDropdown
              items={[{ id: "remove", text: "Remove" }]}
              ariaLabel="Board item settings"
              variant="icon"
              onItemClick={() => actions.removeItem()}
            />
          }
        >
          {item.data.content}
        </BoardItem>
      )}
      onItemsChange={event => setItems([...event.detail.items])}
      items={items}
      i18nStrings={(() => {
        function createAnnouncement(
          operationAnnouncement,
          conflicts,
          disturbed
        ) {
          const conflictsAnnouncement =
            conflicts.length > 0
              ? `Conflicts with ${conflicts
                .map(c => c.data.title)
                .join(", ")}.`
              : "";
          const disturbedAnnouncement =
            disturbed.length > 0
              ? `Disturbed ${disturbed.length} items.`
              : "";
          return [
            operationAnnouncement,
            conflictsAnnouncement,
            disturbedAnnouncement
          ]
            .filter(Boolean)
            .join(" ");
        }
        return {
          liveAnnouncementDndStarted: operationType =>
            operationType === "resize"
              ? "Resizing"
              : "Dragging",
          liveAnnouncementDndItemReordered: operation => {
            const columns = `column ${operation.placement
              .x + 1}`;
            const rows = `row ${operation.placement.y +
            1}`;
            return createAnnouncement(
              `Item moved to ${
                operation.direction === "horizontal"
                  ? columns
                  : rows
              }.`,
              operation.conflicts,
              operation.disturbed
            );
          },
          liveAnnouncementDndItemResized: operation => {
            const columnsConstraint = operation.isMinimalColumnsReached
              ? " (minimal)"
              : "";
            const rowsConstraint = operation.isMinimalRowsReached
              ? " (minimal)"
              : "";
            const sizeAnnouncement =
              operation.direction === "horizontal"
                ? `columns ${operation.placement.width}${columnsConstraint}`
                : `rows ${operation.placement.height}${rowsConstraint}`;
            return createAnnouncement(
              `Item resized to ${sizeAnnouncement}.`,
              operation.conflicts,
              operation.disturbed
            );
          },
          liveAnnouncementDndItemInserted: operation => {
            const columns = `column ${operation.placement
              .x + 1}`;
            const rows = `row ${operation.placement.y +
            1}`;
            return createAnnouncement(
              `Item inserted to ${columns}, ${rows}.`,
              operation.conflicts,
              operation.disturbed
            );
          },
          liveAnnouncementDndCommitted: operationType =>
            `${operationType} committed`,
          liveAnnouncementDndDiscarded: operationType =>
            `${operationType} discarded`,
          liveAnnouncementItemRemoved: op =>
            createAnnouncement(
              `Removed item ${op.item.data.title}.`,
              [],
              op.disturbed
            ),
          navigationAriaLabel: "Board navigation",
          navigationAriaDescription:
            "Click on non-empty item to move focus over",
          navigationItemAriaLabel: item =>
            item ? item.data.title : "Empty"
        };
      })()}
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <Box variant="strong" color="inherit">
              No items
            </Box>
            <Button iconName="add-plus">
              Add an item
            </Button>
          </SpaceBetween>
        </Box>
      }
    />
  );
}
