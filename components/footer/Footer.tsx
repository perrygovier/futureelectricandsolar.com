import React from 'react';
import ResponsiveContainer from '../responsive-container/ResponsiveContainer';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ResponsiveContainer as="section">
        <div className={'content'}>
          <h2>Get Your Free Quote Today!</h2>
          <p>Ita has never been a better time to invest in solar. Use this form to apply for a Free Quote and we'll be in touch shortly to discuss your options and get you a detailed report with the information necessar to decide what energy solution works best for you and your home.</p>
        </div>
        <div className={'form'}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeJEcRt9bqOGR3pFLL4wfjI4EKBQZjPcDC5fSkPZGnS0WnJag/viewform?embedded=true" 
            width="320"
            height="808"
            frameBorder="0"
          >
            Loading…
          </iframe>
        </div>
      </ResponsiveContainer>
    </footer>
  );
}