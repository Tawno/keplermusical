import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/layout/ui/Card'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <div id="parallax"></div> */}
      <Head>
       {/* <Script src="/public/parallax.js" id="show-parallax" strategy="afterInteractive" />  */}
        {/* <script async defer type="text/javascript" src="../public/parallax.js"></script>  */}
        <title>Kepler - Harmony of the Worlds</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Kepler - Harmony of the Worlds</h1>
        <main className={styles.main}>      
        <Card>  <p>
        A musical celebration inspired by the life and work of Johannes Kepler - astronomer, mathematician, astrologer and visionary.
        </p>
        <p>
        Set in late 16th/early 17th century Europe, an era of superstition, ignorance, plague and religious tyranny, the brilliant young Kepler, part-dreamer, part-explorer, emerges from a miserable and sickly childhood in obsessive pursuit of an idea which would eventually change mankind’s concept of the heavens and lay the foundations of Modern Astronomy.
        </p>
        <div className={styles.continueReading}><Link href="" className={` readMore`}>Continue reading</Link></div></Card>
        <Card>
<p>2x1 song block</p>
        </Card>
      </main>
   
    </div>
  )
}