import Button from 'components/button/Button';
import React, { useState } from 'react';
import ResponsiveContainer from '../responsive-container/ResponsiveContainer';
import styles from './Footer.module.scss';

import Email from '../../icons/email.svg';
import Facebook from '../../icons/facebook.svg';
import Instagram from '../../icons/instagram.svg'

export default function Footer() {
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [messageSending, setMessageSending] = useState(false);
  const [messageRecieved, setMssageRecieved] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleFreeQuoteSubmit = async event => {
    event.preventDefault();
    setMessageSending(true)

    const options = {
      body: JSON.stringify({
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }

    try {
      const response = await fetch('/api/quote', options)
      // console.log(response);

      setMssageRecieved(response.ok);
      setStatusMessage('Message Recieved! We\'ll be in touch soon.');
    } catch {
      setMssageRecieved(false);
      setStatusMessage('Message not sent. Please try again.')
    }
    setMessageSending(false)
  }

  const formatPhonerequired = event => {
    var cleaned = ('' + event.target.value).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    
    if (!match && cleaned.length !== 10) {
      return setPhoneInvalid(true);
    }

    event.target.value = [match[2], '-', match[3], '-', match[4]].join('');
    setPhoneInvalid(false);
  }

  return (
    <footer className={styles.footer}>
      <ResponsiveContainer As="section">
        <div className={'content'}>
          <h2>Get Your Free Quote Today!</h2>
          <p>It has never been a better time to invest in solar. Use this form to apply for a Free Quote and we'll be in touch shortly to discuss your options and get you a detailed report with the information necessar to decide what energy solution works best for you and your home.</p>
        </div>
        <form className={styles.form} onSubmit={handleFreeQuoteSubmit}>
          <div className={styles.row}>
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" autoComplete="name" required/>
          </div>
          <div className={styles.row}>
            <label htmlFor="phone">Phone *</label> {phoneInvalid && <span className={styles.error}>Please provide a 10 digit number. ex: 608-123-4567</span>}
            <input type="tel" id="phone" name="phone" autoComplete="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onBlur={formatPhonerequired}/>
          </div>
          <div className={styles.row}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" autoComplete="email" required/>
          </div>
          <div className={styles.row}>
            <label htmlFor="message">Message *</label>
            <textarea rows={4} id="message" name="message" placeholder="I would like a free quote!" required/>
          </div>
          <div className={styles.row}>
            {messageRecieved ?
              <h3>{statusMessage}</h3> :
              <>
                <Button type="submit" className={styles.btn} disabled={messageSending}>{messageSending ? 'Sending' : 'Send'}</Button>
                <span>{statusMessage}</span>
              </>
            }
          </div>
        </form>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <ul className={styles.social}>
          <li>
            <a href="https://www.facebook.com/futureelectricandsolar" target="_blank" rel="noopener">
              <Facebook/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/futureelectricandsolar" target="_blank" rel="noopener">
              <Instagram/>
            </a>
          </li>
          <li>
            <a href="mailto:mark@futureelectricandsolar.com">
              <Email/>
            </a>
          </li>
        </ul>
        <div className={styles.copyright}>Copyright 2020 - Electric Future LLC</div>
      </ResponsiveContainer>
    </footer>
  );
}