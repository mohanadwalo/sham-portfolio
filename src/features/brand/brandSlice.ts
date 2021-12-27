import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BrandType from '../../types/brand';

export type BrandState = {
  brand: BrandType;
  status: 'pending' | 'successed';
};
const initialState: BrandState = {
  brand: { id: '', name: '', message: '', vision: '' },
  status: 'pending',
};

export const getBrandFromApi = createAsyncThunk('brand/setBrand', async () => {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/portfolioApi/brand.json`
  );
  return (await response.json()) as BrandType;
});

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrandFromApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.brand.id = action.payload.id;
        state.brand.message = action.payload.message;
        state.brand.name = action.payload.name;
        state.brand.vision = action.payload.vision;
        state.status = 'successed';
      }
    });
  },
});

export const selectBrand = (state: RootState) => state.brand;
export default brandSlice.reducer;
