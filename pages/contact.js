import Head from 'next/head'
import { Fragment } from 'react'
import Card from '../components/layout/ui/Card'
import Banner from '../components/layout/ui/Banner'
import Image from 'next/image'

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner><Image src="/../public/Johannes_Kepler_1610.jpg" alt="drawing of an old telescope" width="640" height="343" style={{objectPosition: '52% 28%'}}/></Banner>
      <Card>
          <h2>contact</h2>
          <p>details here</p>
      </Card>
    </Fragment>
  )
}
export default Contact
