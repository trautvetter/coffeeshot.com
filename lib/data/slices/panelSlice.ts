// lib/data/panelSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PanelState {
  selectedId: number | null;
}

const initialState: PanelState = {
  selectedId: null,
};

const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setSelectedId: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
    clearSelectedId: (state) => {
      state.selectedId = null;
    },
  },
});

export const { setSelectedId, clearSelectedId } = panelSlice.actions;
export default panelSlice.reducer;
