import React from 'react';
import ResponsiveContainer from '../responsive-container/ResponsiveContainer';
import styles from './Footer.module.scss';

export default function Footer() {
  const handleFreeQuoteSubmit = async event => {
    event.preventDefault();

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
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" autoComplete="tel" required/>
          </div>
          <div className={styles.row}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" autoComplete="email" required/>
          </div>
          <div className={styles.row}>
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" placeholder="I would like a free quote!" required/>
          </div>
          <div className={styles.row}>
            <button type="submit">Send</button>
          </div>
        </form>
      </ResponsiveContainer>
    </footer>
  );
}