import Head from 'next/head'
import { Fragment } from 'react'
import Card from '../components/layout/ui/Card'

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card>
          <h1>contact</h1>
          <p>details here</p>
      </Card>
    </Fragment>
  )
}
export default Contact
