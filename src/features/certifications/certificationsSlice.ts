import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import CertificationType from '../../types/certification';

export type CertificationState = {
  certifications: CertificationType[];
  status: 'pending' | 'successed';
};

const initialState: CertificationState = {
  certifications: [],
  status: 'pending',
};

export const getCertificationsFromApi = createAsyncThunk(
  'certifications/setCertifications',
  async () => {
    const response = await fetch(
      `${process.env.PUBLIC_URL}/portfolioApi/certifications.json`
    );
    return (await response.json()) as CertificationType[];
  }
);

export const certificationsSlice = createSlice({
  name: 'certifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCertificationsFromApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = 'successed';
        state.certifications = action.payload;
      }
    });
  },
});

export const selectAllCertifications = (state: RootState) =>
  state.certifications;
export default certificationsSlice.reducer;
