import { useEffect } from 'react';

import styled from 'styled-components';

import { Button } from '../../components/shared/button';
import profilePicture from '../../assets/images/profile-picture.png';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { BrandState, getBrandFromApi, selectBrand } from './brandSlice';
import { useNavigate } from 'react-router-dom';

const StyledBrand = styled.section`
  ${(props) => props.theme.brand}
  ${(props) => props.theme.regionSpace}
  display: flex;
  flex-direction: column;
  .vision,
  .profile {
    display: flex;
  }
  .vision {
    ${(props) => props.theme.fonts.h1}
    width: 100%;
    text-align: center;
  }
  .profile {
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 1rem;
    .picture {
      border-radius: 100%;
      border: 5px solid ${(props) => props.theme.colors.primary};
      background-image: url(${profilePicture});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    .details {
      display: flex;
      flex-direction: column;
      .name,
      .message,
      .options {
        display: flex;
        button {
          :first-child {
            margin-right: 1rem;
          }
        }
      }
      .name {
        ${(props) => props.theme.fonts.h2};
        color: ${(props) => props.theme.colors.primary};
      }
      .message {
        ${(props) => props.theme.fonts.h3};
        ${(props) => props.theme.bodySpaceTopBottom};
      }
      .options {
      }
    }
  }
`;

export const Brand: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data: BrandState = useAppSelector(selectBrand);
  useEffect(() => {
    if (data.status === 'pending') dispatch(getBrandFromApi());
  }, [data.status, dispatch]);
  return (
    <StyledBrand>
      <div className='vision'>{data.brand?.vision}</div>
      <div className='profile'>
        <div className='picture'></div>
        <div className='details'>
          <div className='name'>{data.brand?.name}</div>
          <div className='message'>{data.brand?.message}</div>
          <div className='options'>
            <Button
              className='white-fill'
              title='download cv'
              action={() => {
                window.open(
                  '/assets/sample_cv.pdf',
                  '_blank',
                  'fullscreen=yes'
                );
                return false;
              }}
            />
            <Button
              className='outline'
              title='contact us'
              action={() => navigate('/contact')}
            />
          </div>
        </div>
      </div>
    </StyledBrand>
  );
};
