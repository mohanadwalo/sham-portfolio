import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { ULlist } from '../../components/shared/ULlist';
import { getBlogsFromApi, selectBlogById } from './blogsSlice';

const StyledBlog = styled.div`
  ${(props) => props.theme.blog}
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
  .article {
    flex: 1;
    & > .title {
      ${(props) => props.theme.fonts.h3}
      text-transform: capitalize;
    }
    .date {
      ${(props) => props.theme.fonts.small}
      padding-bottom: 0.5rem;
    }
    .banner {
      display: flex;
      flex-direction: colum
      align-items: center;
      img {
        box-shadow: 0 3px 8px ${(props) => props.theme.colors.primaryVariant3};
        border-radius: 5px;
        max-width: 100%;
      }
    }
    .section {
      .title {
        ${(props) => props.theme.fonts.h4}
        padding-top: 1rem;
        text-transform: capitalize;
      }
      .description,
      .list {
        ${(props) => props.theme.fonts.body}
        padding: 0.5rem 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .description{
        .image {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          img{max-width: 100%;}
        }
      }
    }
  }
  .subnav {
    display: flex;
    .fixed {
      flex-direction: column;
      span {
        ${(props) => props.theme.fonts.subNavLink};
        color: ${(props) => props.theme.colors.white};
        text-transform: capitalize;
        padding: 0.3rem 0;
        text-decoration: none;
        display: block;
        cursor: pointer;
        &.active {
          color: ${(props) => props.theme.colors.primaryVariant1};
        }
      }
    }
  }
  .options {
    padding-top: 1.7rem;
  }
`;

function arrayToObject(arr: string[]) {
  const obj: { [key: string]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
}

const Blog: React.FC = () => {
  const { blogId } = useParams();
  const dispatch = useAppDispatch();
  const currentBlog = useAppSelector((state: RootState) =>
    selectBlogById(state, blogId || '0')
  );

  useEffect(() => {
    if (!currentBlog)
      dispatch(getBlogsFromApi({ searchText: '', activeTags: '' }));
  }, [currentBlog, dispatch]);

  useEffect(() => {
    const targets = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '150px',
      threshold: [0, 1],
    });
    for (let i = 0; i < targets.length; i++) {
      observer.observe(targets[i] as Element);
    }
  }, []);
  //helper functions
  const sections = currentBlog?.sections.map((section) => section.id) || [];

  const precedence: { [key: string]: number } = arrayToObject(sections);
  const updatePrecedence = (ratio: number, section: string) => {
    if (ratio === 1 && section) {
      precedence[section] = 1;
    } else if (ratio === 0 && section) {
      precedence[section] = 0;
    }
  };
  const getActiveTarget = () => {
    for (const key of Object.keys(precedence)) {
      if (precedence[key] === 1) {
        return key;
      }
    }
  };
  const callback = (entries: IntersectionObserverEntry[]) => {
    //remove all active classes
    for (const entry of entries) {
      updatePrecedence(
        entry.intersectionRatio,
        entry.target.getAttribute('id') as string
      );
    }
    //remove all active classes
    document
      .querySelectorAll('.subnav span.active')
      .forEach((element) => element.classList.remove('active'));
    // add active class to the current active section
    document.getElementById(`_${getActiveTarget()}`)?.classList.add('active');
  };
  return (
    <StyledBlog>
      <div className='article'>
        <div className='title'>{currentBlog?.title}</div>
        <div className='date'>{currentBlog?.date}</div>
        <div className='banner'>
          <img
            src={`${process.env.PUBLIC_URL}/${currentBlog?.banner}`}
            alt='banner'
          />
        </div>
        {currentBlog?.sections.map((section) => (
          <div className='section' id={section.id} key={section.title}>
            <div className='title'>{section.title}</div>
            {section.descriptions?.map((description) => (
              <div key={nanoid()} className='description'>
                <div className='text'>{description.text}</div>
                {description?.commands && (
                  <ULlist>
                    {description.commands.map((command) => (
                      <li key={nanoid()}>{command}</li>
                    ))}
                  </ULlist>
                )}
                {description.list && (
                  <div className='list'>
                    <ULlist>
                      {description.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ULlist>
                  </div>
                )}
                {description?.image && (
                  <div className='image'>
                    <img src={description.image} alt='' />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='subnav'>
        <div className='fixed'>
          {currentBlog?.subNav.map((link, index) => (
            <span
              id={`_${link.id}`}
              className={index ? '' : 'active'}
              key={`_${link.id}`}
              onClick={() => {
                document.getElementById(link.id)?.scrollIntoView();
              }}
            >
              {link.title}
            </span>
          ))}
        </div>
      </div>
    </StyledBlog>
  );
};

export default Blog;
