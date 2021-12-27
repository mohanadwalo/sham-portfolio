import React, { useEffect } from 'react';

import styled from 'styled-components';
import { TwoColumnLayout } from '../../components/shared/twoColumnLayout';
import servicesLargeIcon from '../../assets/svgs/services/services-large.svg';
import { ULlist } from '../../components/shared/ULlist';
import { getServicesFromApi, selectAllServices } from './servicesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const StyledServices = styled.div`
  ${(props) => props.theme.service}
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    .image-container {
      height: 4rem;
    }
    .title {
      ${(props) => props.theme.fonts.h4}
      padding-top: 1rem;
    }
  }
`;

const Services: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllServices);
  useEffect(() => {
    if (data.status === 'pending') dispatch(getServicesFromApi());
  }, [data.status, dispatch]);

  return (
    <TwoColumnLayout
      leftContent={<img src={servicesLargeIcon} alt='services' />}
    >
      <StyledServices>
        {data.services.map((service) => (
          <div className='service' key={`service_${service.id}`}>
            <div className='image-container'>
              <img src={service.icon} alt={service.title} />
            </div>
            <div className='title'>{service.title}</div>
            <div className='description'>
              <ULlist>
                <ULlist>
                  {service.description.map((desc) => (
                    <li key={`service_desc_${desc}`}>{desc}</li>
                  ))}
                </ULlist>
              </ULlist>
            </div>
          </div>
        ))}
      </StyledServices>
    </TwoColumnLayout>
  );
};
export default Services;
