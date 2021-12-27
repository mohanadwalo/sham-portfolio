import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/shared/button';
import { ResultMessage } from '../../components/shared/resultMessage';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getBlogsFromApi, selectAllBlogs } from './blogsSlice';

const StyledBlogs = styled.div`
  ${(props) => props.theme.blog}
  .search {
    ${(props) => props.theme.input}
    input {
      ${(props) => props.theme.fonts.body}
      height: 2.625rem;
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    padding-top: 1rem;
    .tag {
      margin: 0.4rem;
    }
  }
  .blogs-list {
    display: flex;
    .blog-container {
      display: flex;
      ${(props) => props.theme.bodySpaceTopBottom}
      .blog {
        cursor: pointer;
        position relative;
        .image {
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          box-shadow: 0 3px 8px ${(props) =>
            props.theme.colors.primaryVariant3};
          border-radius: 5px;

        }
        .title {
          ${(props) => props.theme.fonts.h4}
          ${(props) => props.theme.bodySpace}
          background: ${(props) => props.theme.colors.overlay};
          position: absolute;
          bottom: 0;
          width: 100%;
          text-transform: capitalize;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

export const BlogsIndex: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllBlogs);
  useEffect(() => {
    if (data.status === 'pending')
      dispatch(getBlogsFromApi({ searchText: '', activeTags: '' }));
  }, [data.status, dispatch]);

  const [activeTags, setActiveTags] = useState<string[]>([]);

  const addRemoveTag = (tagName: string) => {
    if (activeTags.includes(tagName))
      setActiveTags([...activeTags.filter((tag) => tag !== tagName)]);
    else setActiveTags([...activeTags, tagName]);
  };

  const navigate = useNavigate();
  return (
    <StyledBlogs>
      <div className='search'>
        <input
          type='text'
          className='search-input'
          onChange={(e) =>
            dispatch(
              getBlogsFromApi({
                searchText: e.target.value,
                activeTags: activeTags.join(''),
              })
            )
          }
          placeholder='Search for a keyword'
        />
      </div>

      <div className='tags'>
        {data?.blogs?.tags.map((tag, index) => (
          <div key={`tag_${index}`} className='tag-wrapper'>
            <Button
              className={`tag${activeTags.includes(tag) ? ' active' : ''}`}
              padding='0.2rem 1rem'
              minWidth='auto'
              title={tag}
              action={() => addRemoveTag(tag)}
            />
          </div>
        ))}
      </div>
      <div className='blogs-list'>
        {data?.blogs?.blogs.map((blog) => (
          <div
            key={`blogs_list_${blog.id}`}
            onClick={() => navigate(`/blogs/${blog.id}?title=${blog.title}`)}
            className='blog-container'
          >
            <div className='blog'>
              <div
                className='image'
                style={{ backgroundImage: `url(${blog.icon})` }}
              ></div>
              <div className='title'>{blog.title}</div>
            </div>
          </div>
        ))}
        {data?.blogs?.blogs.length <= 0 && (
          <ResultMessage color='fail' message='There is no blogs.' />
        )}
      </div>
    </StyledBlogs>
  );
};

export default BlogsIndex;
