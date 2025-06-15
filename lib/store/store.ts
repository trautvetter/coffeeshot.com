// lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '@/services/productApi';
import { fooApi } from '@/services/fooApi';
import {eightyearApi} from "@/services/eightyearApi";
import panelReducer from '../data/slices/panelSlice';
import {tradeApi} from "@/services/tradeApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [fooApi.reducerPath]: fooApi.reducer,
    [eightyearApi.reducerPath]: eightyearApi.reducer,
    panel: panelReducer,
    [tradeApi.reducerPath]: tradeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware,
      fooApi.middleware,
      eightyearApi.middleware,
      tradeApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
