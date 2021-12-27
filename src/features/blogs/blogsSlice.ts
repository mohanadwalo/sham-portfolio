import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import BlogType from '../../types/blog';

export type BlogState = {
  blogs: BlogType;
  status: 'pending' | 'successed';
};

const initialState: BlogState = {
  blogs: { tags: [], blogs: [] },
  status: 'pending',
};

//async thunk
type Filter = {
  searchText: string;
  activeTags: string;
};
export const getBlogsFromApi = createAsyncThunk(
  'blogs/setBlogs',
  async ({ searchText, activeTags }: Filter) => {
    const response = await fetch(
      `${process.env.PUBLIC_URL}/portfolioApi/blogs.json`
    );
    const result = (await response.json()) as BlogType;

    return {
      ...result,
      blogs: result.blogs.filter(
        (blog) =>
          (blog.title
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
            searchText === '') &&
          (blog.tags
            .join('')
            .toLocaleLowerCase()
            .includes(activeTags.toLocaleLowerCase()) ||
            activeTags.length === 0)
      ),
    };
  }
);

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogsFromApi.fulfilled, (state, action) => {
      if (action.payload) {
        state.status = 'successed';
        state.blogs = action.payload;
      }
    });
  },
});

export const selectAllBlogs = (state: RootState) => state.blogs;
export const selectBlogById = createSelector(
  [selectAllBlogs, (state: RootState, blogId: string) => blogId],
  (response, blogId) => response.blogs.blogs.find((blog) => blog.id === blogId)
);

export default blogsSlice.reducer;
