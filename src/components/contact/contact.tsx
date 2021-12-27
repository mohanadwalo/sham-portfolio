import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { TwoColumnLayout } from '../shared/twoColumnLayout';
import contactLargeIcon from '../../assets/svgs/contact/contact-large.svg';
import contactEmailIcon from '../../assets/svgs/contact/contact-email.svg';
import contactPhoneIcon from '../../assets/svgs/contact/contact-mobile.svg';
import { Button } from '../shared/button';
import { ResultMessage } from '../shared/resultMessage';
import emailjs from '@emailjs/browser';

const StyledContact = styled.div`
  ${(props) => props.theme.contact}
  display: flex;
  flex-direction: column;
  width: 100%;
  form {
    width: 100%;
    .contact-info {
      display: flex;
      width: 100%;
      justify-content: space-around;
      .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .email-address,
        .phone {
          ${(props) => props.theme.fonts.h4}
          ${(props) => props.theme.bodySpaceTopBottom}
        }
      }
    }
    .contact-form {
      ${(props) => props.theme.input}
      display: flex;
      flex-direction: column;
      .title {
        ${(props) => props.theme.fonts.h3}
        ${(props) => props.theme.titleSpaceTopBottom}
      }
      .send-button,
      .message-input,
      .email-input {
        ${(props) => props.theme.bodySpaceTopBottom}
      }
      input {
        ${(props) => props.theme.fonts.body}
      }
      .message-input {
        input {
          height: 7.875rem;
          width: 100%;
        }
      }
    }
  }
`;
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Contact: React.FC = () => {
  const [contactOptions, setContactOptions] = useState({
    isSent: false,
    message: '',
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      message: { value: string };
    };
    if (!target.email.value || !validateEmail(target.email.value)) {
      document.querySelector('.email')?.classList.add('required');
      setContactOptions({
        ...contactOptions,
        isSent: false,
        message: 'The email is required and should be valid.',
      });
      return;
    }
    document.querySelector('.email')?.classList.remove('required');
    if (!target.message.value) {
      document.querySelector('.message')?.classList.add('required');
      setContactOptions({
        ...contactOptions,
        isSent: false,
        message: 'The message is required.',
      });
      return;
    }

    document.querySelector('.message')?.classList.remove('required');
    //you can use the below data to submit POST request to your server
    //const email = target.email.value;
    //const message = target.message.value;
    //clear
    const button = document.querySelector('.primary') as HTMLButtonElement;
    button.innerHTML = 'Sending...';
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID || '',
        process.env.REACT_APP_EMAIL_TEMPLATE_ID || '',
        { from_email: target.email.value, message: target.message.value },
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        () => {
          setContactOptions({
            ...contactOptions,
            isSent: true,
            message: 'Your message was sent successfully.',
          });
          target.email.value = '';
          target.message.value = '';
          button.innerHTML = 'Send';
        },
        () => {
          setContactOptions({
            ...contactOptions,
            isSent: false,
            message: 'Failed.',
          });
        }
      );
  };
  return (
    <TwoColumnLayout leftContent={<img src={contactLargeIcon} alt='contact' />}>
      <StyledContact>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className='contact-info'>
            <div className='list'>
              <img src={contactEmailIcon} alt='email' />
              <div className='email-address'>email@domain.com</div>
            </div>
            <div className='list'>
              <img src={contactPhoneIcon} alt='phone' />
              <div className='phone'>+96111256482</div>
            </div>
          </div>
          <div className='contact-form'>
            <div className='title'>Send a Message</div>
            <div className='email-input'>
              <input className='email' name='email' placeholder='Email' />
            </div>
            <div className='message-input'>
              <input className='message' name='message' placeholder='Message' />
            </div>
            <div className='send-button'>
              <Button
                title='send'
                padding='0.9rem'
                minWidth='100%'
                className='primary'
                type='submit'
              />
            </div>
          </div>
        </form>
        {contactOptions.message && (
          <ResultMessage
            color={contactOptions.isSent ? 'success' : 'fail'}
            message={contactOptions.message}
          />
        )}
      </StyledContact>
    </TwoColumnLayout>
  );
};
export default Contact;
