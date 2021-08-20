import Image from 'next/image'
import React from 'react';
import { RichText } from 'prismic-reactjs'

import ResponsiveContainer from 'components/responsive-container/ResponsiveContainer';
import { getPrismicPageContent } from 'utils/prismicHelpers'
import styles from '../styles/pages/Home.module.scss'

import Sun from '../icons/sun.svg';
import Flash from '../icons/flash.svg';
import House from '../icons/home.svg';
import Business from '../icons/business.svg';
import BatteryCharging from '../icons/battery-charging.svg';

import HeaderImage from '../public/img/home/header-image.jpg';
import Mark from '../public/img/home/mark.jpg';
import Button from 'components/button/Button';
import Layout from 'components/layout';

export default function Homepage({ doc, themeContent }) {
  if (!doc?.data) {
    return null;
  }

  return (
    <Layout themeContent={{...themeContent}}>
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
          <RichText render={doc.data['introduction_why']} />
          <Button>Read More</Button>
          </div>
          <div className="col">
            <Image src={Mark} layout="responsive" width={711} height={399} />
          </div>
        </div>
        <div className={`center ${styles.stats}`}>
          <RichText render={doc.data['introduction_what']} />

          <Button>Read More</Button>
          <Button>Contact us for Your Free Quote</Button>
        </div>
      </ResponsiveContainer>
      {/* <Testimonials/> */}
    </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = null, previewData = {ref: undefined} }) {
  return await getPrismicPageContent('homepage', preview, previewData);
}
