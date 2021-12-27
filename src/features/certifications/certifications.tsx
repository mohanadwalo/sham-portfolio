import React, { useEffect } from 'react';

import styled from 'styled-components';
import { TwoColumnLayout } from '../../components/shared/twoColumnLayout';
import certificationsLargeIcon from '../../assets/svgs/certifications/certification-large.svg';
import { ULlist } from '../../components/shared/ULlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getCertificationsFromApi,
  selectAllCertifications,
} from './certificationsSlice';

const StyledCertifications = styled.div`
  ${(props) => props.theme.certifications}
  display: flex;
  flex-direction: column;
  width: 100%;
  .certification {
    display: flex;
    img {
      flex-shrink: 0;
      flex-grow: 0;
      width: auto;
      border-radius: 0.5rem;
      flex-shrink: 0;
      box-shadow: 0 3px 8px ${(props) => props.theme.colors.primaryVariant3};
      border-radius: 5px;
    }
    .certification-details {
      padding-left: 1rem;
      .title {
        ${(props) => props.theme.fonts.h3}
        color: ${(props) => props.theme.colors.primary};
      }
      .date {
        ${(props) => props.theme.fonts.h6}
      }
      .description {
        ${(props) => props.theme.bodySpaceTopBottom}
      }
    }
  }
`;

const Certifications: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllCertifications);
  useEffect(() => {
    if (data.status === 'pending') dispatch(getCertificationsFromApi());
  }, [data.status, dispatch]);
  return (
    <TwoColumnLayout
      leftContent={<img src={certificationsLargeIcon} alt='certifications' />}
    >
      <StyledCertifications>
        {data.certifications.map((certification) => (
          <div className='certification' key={`cert_${certification.id}`}>
            <img src={certification.icon} alt={certification.title} />
            <div className='certification-details'>
              <div className='title'>{certification.title}</div>
              <div className='date'>{`${certification.issueDate}-${certification.expireDate}`}</div>
              <div className='description'>
                <ULlist>
                  {certification.description.map((desc) => (
                    <li key={`cert_desc_${desc}`}>{desc}</li>
                  ))}
                </ULlist>
              </div>
            </div>
          </div>
        ))}
      </StyledCertifications>
    </TwoColumnLayout>
  );
};
export default Certifications;
