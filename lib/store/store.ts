// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '@/services/api';
import { fooApi } from '@/services/fooApi';
import {eightyearApi} from "@/services/eightyearApi";
import panelReducer from '../data/slices/panelSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [fooApi.reducerPath]: fooApi.reducer,
    [eightyearApi.reducerPath]: eightyearApi.reducer,
    panel: panelReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      fooApi.middleware,
      eightyearApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
