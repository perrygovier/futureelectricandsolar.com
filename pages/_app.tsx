import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='crossorigin'/> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
export default MyApp
