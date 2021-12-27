import { configureStore } from '@reduxjs/toolkit';

import brandReducer from '../features/brand/brandSlice';
import projectsReducer from '../features/projects/projectsSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import aboutReducer from '../features/about/aboutSlice';
import servicesReducer from '../features/services/servicesSlice';
import certificationsReducer from '../features/certifications/certificationsSlice';

export const store = configureStore({
  reducer: {
    brand: brandReducer,
    projects: projectsReducer,
    blogs: blogsReducer,
    about: aboutReducer,
    services: servicesReducer,
    certifications: certificationsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
