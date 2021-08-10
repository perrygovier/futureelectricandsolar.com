import React from 'react'
import { useRouter } from 'next/router'
import PrismicScript from '../components/PrismicScript'
import Head from 'next/head'
import Footer from './footer/Footer'
import Header from './header/Header'
import MetaHead from './MetaHead'
import Testimonials from './testimonials/Testimonials'

export default function Layout({ children, themeContent }) {
  const { isPreview } = useRouter();
  console.log(themeContent)
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin'/> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
        <MetaHead/>
      </Head>

      {isPreview ? (
        <a className="prismic-preview-exit" href="/api/exit-preview">Exit Preview</a>
      ) : null}
      <Header nav={themeContent.data.primary_nav} social={themeContent.data.social_links}/>

      {children}

      <Testimonials/>
      <Footer/>
      <PrismicScript />
    </>
  )
}