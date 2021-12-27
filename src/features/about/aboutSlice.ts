import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import AboutType from '../../types/about';

export type AboutState = {
  about: AboutType;
  status: 'pending' | 'successed';
};

const initialState: AboutState = {
  about: { education: [], experience: [] },
  status: 'pending',
};

export const getAboutFromApi = createAsyncThunk('about/setAbout', async () => {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/portfolioApi/about.json`
  );
  return (await response.json()) as AboutType;
});

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAboutFromApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = 'successed';
        state.about = action.payload;
      }
    });
  },
});

export const selectAllAbout = (state: RootState) => state.about;
export default aboutSlice.reducer;
