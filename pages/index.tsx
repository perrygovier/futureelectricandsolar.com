import Image from 'next/image'
import React from 'react';

import ResponsiveContainer from 'components/responsive-container/ResponsiveContainer';
import { Client } from 'utils/prismicHelpers'
import styles from '../styles/pages/Home.module.scss'

import Lightbulb from '../icons/lightbulb.svg';
import Sun from '../icons/sun.svg';
import Flash from '../icons/flash.svg';
import House from '../icons/home.svg';
import Business from '../icons/business.svg';
import BatteryCharging from '../icons/battery-charging.svg';

import HeaderImage from '../public/img/home/header-image.jpg';
import Mark from '../public/img/home/mark.jpg';
import Button from 'components/button/Button';
import Testimonials from 'components/testimonials/Testimonials';

export default function Homepage({ doc }) {
  if (!doc?.data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <ResponsiveContainer As="header" className={styles.hero}>
        <Image src={HeaderImage} priority={true} placeholder="blur" layout="responsive" width={1432} height={603}/>
        <ul>
          <li>
            <Sun/>
            <span>Solar Panels</span>
          </li>
          <li>
            <Flash/>
            <span>Electric Vehicle Charging</span>
          </li>
          <li>
            <BatteryCharging/>
            <span>Battery Storage</span>
          </li>
          <li>
            <House/>
            <span>Residential</span>
          </li>
          <li>
            <Business/>
            <span>Commercial</span>
          </li>
        </ul>
      </ResponsiveContainer>
        
      <ResponsiveContainer As="main" className={styles.main}>
        <div className="twoCol">
          <div className="col">
            <h2>Why Choose Future Electric and Solar?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button>Read More</Button>
          </div>
          <div className="col">
            <Image src={Mark} layout="responsive" width={711} height={399} ></Image>
          </div>
        </div>
        <div className={`center ${styles.stats}`}>
          <h1>How Solar Power Can Work For You</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
          <Button>Read More</Button>
          <Button>Contact us for Your Free Quote</Button>
        </div>
      </ResponsiveContainer>
      <Testimonials/>
    </div>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('homepage', ref ? { ref } : null) || {}
  // const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  console.log(doc)

  return {
    props: {
      doc,
      // menu,
      preview
    }
  }
}
