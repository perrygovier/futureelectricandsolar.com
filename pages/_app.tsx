import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import MetaHead from 'components/MetaHead'
import Testimonials from 'components/testimonials/Testimonials'

function MyApp({ Component, pageProps }: AppProps) {

  const { isPreview } = useRouter()

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin'/> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
        <MetaHead/>
      </Head>

      {isPreview ? (
            <a href="/api/exit-preview" className="prismic-preview-exit">Exit Preview</a>
          ) : null}

      <Header/>
      <Component {...pageProps} />
      {/* <Testimonials/> */}
      <Footer/>
    </>
  )
}
export default MyApp
