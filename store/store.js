import { configureStore } from '@reduxjs/toolkit';
import { helloApi } from '../services/api';

export const store = configureStore({
  reducer: {
    [helloApi.reducerPath]: helloApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(helloApi.middleware),
});
