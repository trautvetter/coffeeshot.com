// lib/data/selectors/eightyearSelectors.ts
import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import {eightyear} from '@prisma/client';

export const selectEightyears = (state: RootState) =>
  state.eightyearApi.queries['getEightyears(undefined)']?.data ?? [];

export const selectEightyearStats = createSelector(
  [selectEightyears],
  (eightyears: eightyear[]) => {
    const total = eightyears.length;
    const completed = eightyears.filter(e => e.checkedoff).length;
    const remaining = total - completed;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const startDate = new Date(eightyears[0].date);
    const endDate = new Date(eightyears[eightyears.length - 1].date);

    return {total, completed, remaining, percentage, startDate, endDate};
  }
);
