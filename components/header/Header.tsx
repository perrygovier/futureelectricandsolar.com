import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss';

import ResponsiveContainer from '../responsive-container/ResponsiveContainer';

import Email from '../../icons/email.svg';
import Facebook from '../../icons/facebook.svg';
import Instagram from '../../icons/instagram.svg'
import React from 'react';
import Button from '../button/Button';

export default function Header({nav, social}) {
  // console.log('data', nav, social)

  const getSocialIcon = iconName => {
    // console.log(iconName)
    switch(iconName) {
      case 'Instagram':
        return <Instagram/>
      case 'Email':
        return <Email/>
    }
    return <Facebook/>
  }

  return (
    <header className={styles.header}>
      <ResponsiveContainer As="nav">
        <div className={styles.logoWrapper}>
          <Image src="/img/future-electric-and-solar.png" width={242} height={150}/>
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