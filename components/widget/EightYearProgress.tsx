'use client';

import { ProgressBar } from "@cloudscape-design/components";
import { format } from "date-fns";
import { selectEightyearStats } from '@/lib/data/selectors/eightyearSelectors';
import {useSelector} from "react-redux";

export default function EightyearProgress() {
  const { total, completed, percentage, startDate, endDate } = useSelector(selectEightyearStats);
  const rangeString = `${format(startDate, "EEE, MMM d yyyy")} ~ ${format(endDate, "EEE, MMM d yyyy")}`;

  return (
    <ProgressBar
      label="Daily check off"
      value={percentage}
      additionalInfo={rangeString}
      description={`progress: ${completed}/${total}`}
      ariaLabelledby="eightyear-progress"
    />
  );
}
