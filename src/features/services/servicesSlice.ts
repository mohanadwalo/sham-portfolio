import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import ServiceType from '../../types/service';

export type ServiceState = {
  services: ServiceType[];
  status: 'pending' | 'successed';
};

const initialState: ServiceState = {
  services: [],
  status: 'pending',
};

export const getServicesFromApi = createAsyncThunk(
  'services/setServices',
  async () => {
    const response = await fetch(
      `${process.env.PUBLIC_URL}/portfolioApi/services.json`
    );
    return (await response.json()) as ServiceType[];
  }
);

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getServicesFromApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = 'successed';
        state.services = action.payload;
      }
    });
  },
});

export const selectAllServices = (state: RootState) => state.services;
export default servicesSlice.reducer;
