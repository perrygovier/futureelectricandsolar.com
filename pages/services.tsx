import Image from 'next/image'
import React from 'react';
import { RichText } from 'prismic-reactjs'

import ResponsiveContainer from 'components/responsive-container/ResponsiveContainer';
import { getPrismicPageContent } from 'utils/prismicHelpers'
import styles from '../styles/pages/Home.module.scss'

import Layout from 'components/layout';

export default function Services({ doc, themeContent }) {
  if (!doc?.data) {
    return null;
  }
  
  return (
    <Layout themeContent={{...themeContent}}>
    <div className={styles.container}>
      <ResponsiveContainer As="header" className={styles.hero}>
      {doc.data['header_photo'] && <Image src={doc.data['header_photo'].url} priority={true} layout="responsive" width={1315} height={348}/>}
      </ResponsiveContainer>
        
      <ResponsiveContainer As="main">
        <h1 className="center">Services</h1>

        <div className="twoCol">
          {doc.data['services'].map(service => (
            <div className="col blueContent" key={service.name}>
              <h3 className="center">{service.name}</h3>
              {service.photo && <Image src={service.photo.url} layout="responsive" width={645} height={238} />}
              <RichText render={service.description} />
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </div>
    </Layout>
  )
}

export async function getStaticProps({ preview = null, previewData = {ref: undefined} }) {
  return await getPrismicPageContent('services', preview, previewData);
}
