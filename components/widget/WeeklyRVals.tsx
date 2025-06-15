'use client';

import BarChart from "@cloudscape-design/components/bar-chart";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Link from "@cloudscape-design/components/link";

import weeklyRData from "./weeklyRData.json";

export default function WeeklyRVals() {

  const {x, rTotal, rAverage} = weeklyRData;

  // Compute xDomain by collecting unique x values from all series
  const xDomain = x.slice().sort((a, b) => a - b);

  return (
    <BarChart
      series={[
        {
          title: "R total",
          type: "bar",
          data: x.map((val: number, idx: number) => ({x: val, y: rTotal[idx]})),
          valueFormatter: (e: number) => e.toFixed(2)
        },
        {
          title: "R average(0.x)",
          type: "bar",
          data: x.map((val: number, idx: number) => ({x: val, y: rAverage[idx]})),
          valueFormatter: (e: number) => (e / 10).toFixed(2)
        }
      ]}
      xDomain={xDomain}
      yDomain={[-6, 6]}
      detailPopoverSeriesContent={({series, y}) => {
        const formattedValue = series.valueFormatter
          ? series.valueFormatter(y, y)
          : y.toString();
        return {
          key: series.title,
          value: (
            <Link
              external={true}
              href="#"
              ariaLabel={`See details for ${formattedValue} on ${series.title} (opens in a new tab)`}
            >
              {formattedValue}
            </Link>
          )
        };
      }}
      ariaLabel="Multiple data series line chart"
      height={300}
      // hideFilter
      xTitle="2025 week #"
      yTitle="Totals and averages"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
  );
}
