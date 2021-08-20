import Image from 'next/image'
import Link from 'next/link'
// import React from 'react';

import styles from './Header.module.scss';

import ResponsiveContainer from '../responsive-container/ResponsiveContainer';
import Button from '../button/Button';
import { getSocialIcon } from 'utils/iconHelper';

export default function Header({nav, social}) {
  // console.log('data', nav, social)

  return (
    <header className={styles.header}>
      <ResponsiveContainer As="nav">
        <div className={styles.logoWrapper}>
          <Link href='/'>
            <a>
              <Image src="/img/future-electric-and-solar.png" width={242} height={150}/>
            </a>
          </Link>
        </div>
        <ul className={styles.primaryNav}>
          {nav.map(navItem => (
            <li key={navItem.name}>
              <Link href={navItem.url}>
                <a>{navItem.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.social}>
          {social.map(socialItem => (
            <li key={socialItem.url}>
              <a href={socialItem.url} target="_blank" rel="noopener">
                {getSocialIcon(socialItem.icon)}
              </a>
            </li>
          ))}
        </ul>

        <Button>Free Quote</Button>
      </ResponsiveContainer>
    </header>

  )
}