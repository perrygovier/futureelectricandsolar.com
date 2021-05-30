import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss';

import ResponsiveContainer from '../responsive-container/ResponsiveContainer';

import Email from './email.svg';
import Facebook from './facebook.svg';
import Instagram from './instagram.svg'
import React from 'react';
import Button from '../button/Button';

export default function Header() {
  return (
    <header className={styles.header}>
      <ResponsiveContainer As="nav">
        <div className={styles.logoWrapper}>
          <Image src="/img/future-electric-and-solar.png" width={400} height={149}/>
        </div>
        <ul className={styles.primaryNav}>
          <li>
            {/* <Link> */}
              <a href="/about">About Us</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <a href="/services">Services</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <a href="/why-solar">Why Solar?</a>
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <a href="/contact">Contact</a>
            {/* </Link> */}
          </li>
        </ul>
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

        <Button>Free Quote</Button>
      </ResponsiveContainer>
    </header>

  )
}