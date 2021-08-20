import Image from 'next/image'
import React from 'react';
import { RichText } from 'prismic-reactjs'

import ResponsiveContainer from 'components/responsive-container/ResponsiveContainer';
import { getPrismicPageContent } from 'utils/prismicHelpers'
import styles from '../styles/pages/Home.module.scss'

import Layout from 'components/layout';

export default function About({ doc, themeContent }) {
  if (!doc?.data) {
    return null;
  }
  
  return (
    <Layout themeContent={{...themeContent}}>
    <div className={styles.container}>
      <ResponsiveContainer As="header" className={styles.hero}>
      {doc.data['team_photo'] && <Image src={doc.data['team_photo'].url} priority={true} layout="responsive" width={1315} height={348}/>}
      </ResponsiveContainer>
        
      <ResponsiveContainer As="main">
        <h2 className="center">About</h2>
        <div className="blueContent">
          <RichText render={doc.data['about_intro']} />
        </div>
        <div className="twoCol narrow">
          <div className="col">
            {doc.data['mark_photo'] && <Image src={doc.data['mark_photo'].url} layout="responsive" width={340} height={454} />}
          </div>
          <div className="col">
            <RichText render={doc.data['about_mark']} />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = null, previewData = {ref: undefined} }) {
  return await getPrismicPageContent('about', preview, previewData);
}
