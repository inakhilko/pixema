import { createSlice } from '@reduxjs/toolkit';
import { FiltersFormType } from '../../../api/films';

export type FiltersStoreType = {
  isOpen: boolean;
  filtrationData: FiltersFormType
};

export const initialFiltersState: FiltersStoreType = {
  isOpen: false,
  filtrationData: {
    genres: [],
    country: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFiltersState,
  reducers: {
    openFilters: (
      state,
    ) => ({
      ...state,
      isOpen: true,
    }),
    closeFilters: (state) => ({ ...state, isOpen: false }),
    setFiltrationData: (state, action) => ({
      ...state,
      filtrationData: action.payload,
    }),
  },
});
export const { openFilters, closeFilters, setFiltrationData } = filtersSlice.actions;
export default filtersSlice.reducer;
