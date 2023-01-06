import Head from 'next/head'
import { Fragment } from 'react'
import Card from '../components/layout/ui/Card'
import Banner from '../components/layout/ui/Banner'
import Image from 'next/image'
import Link from 'next/link' 

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
          <h2>Contact</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis feugiat velit in fringilla. Nunc id dignissim purus. Donec non risus urna. Proin eleifend sagittis lacus vitae commodo. Proin non sapien metus. Curabitur volutpat dolor velit, aliquet volutpat ante pulvinar non. Suspendisse mauris sem, pellentesque quis lorem in, bibendum aliquet lacus. Quisque quis ante et purus hendrerit sagittis. Praesent cursus vel magna quis sollicitudin. Maecenas ac neque semper, vehicula lorem nec, ornare ante.</p>
          <p style={{textAlign:'left', fontSize:'18px',paddingLeft:'1rem'}}>Nick Pallett <br/><Link href="mailto:"><b>Email@email.com</b></Link></p>
  </Card>
    </Fragment>
  )
}
export default Contact
