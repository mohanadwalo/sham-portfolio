import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import ProjectType from '../../types/project';

export type ProjectsState = {
  projects: ProjectType[];
  status: 'pending' | 'successed';
};

const initialState: ProjectsState = {
  projects: [],
  status: 'pending',
};

//async thunk
export const getProjectsFromApi = createAsyncThunk(
  'projects/setProjects',
  async (searchText: string) => {
    const response = await fetch(
      `${process.env.PUBLIC_URL}/portfolioApi/projects.json`
    );
    const projects = (await response.json()) as ProjectType[];
    return projects.filter(
      (project) =>
        project.title
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) || searchText === ''
    );
  }
);

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectsFromApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = 'successed';
        state.projects = action.payload;
      }
    });
  },
});

export const selectAllProjects = (state: RootState) => state.projects;

export const selectProjectById = createSelector(
  [selectAllProjects, (state: RootState, projectId: string) => projectId],
  (response, projectId) =>
    response.projects.find((project) => project.id === projectId)
);

export default projectsSlice.reducer;
