import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/layout/ui/Card'
import Script from 'next/script'
import Link from 'next/link'
import Block2x1 from '../components/layout/ui/Block2x1'
import Soundcloud from '../components/layout/embed/soundcloud'

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
        <Card>
          {' '}
          <p>
            A musical celebration inspired by the life and work of Johannes
            Kepler - astronomer, mathematician, astrologer and visionary.
          </p>
          <p>
            Set in late 16th/early 17th century Europe, an era of superstition,
            ignorance, plague and religious tyranny, the brilliant young Kepler,
            part-dreamer, part-explorer, emerges from a miserable and sickly
            childhood in obsessive pursuit of an idea which would eventually
            change mankind’s concept of the heavens and lay the foundations of
            Modern Astronomy.
          </p>
          <div className={styles.continueReading}>
            <Link href="/themusical" className={` readMore`}>
              Continue reading
            </Link>
          </div>
        </Card>

        <Block2x1>
          {' '}
          <Soundcloud
            src={
              'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1368815056&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
            }
            href="https://soundcloud.com/nick-pallett/something-i-saw"
            title={'Something I Saw'}
            description="Short descript of this track"
          >
            {' '}
            descriptions
          </Soundcloud>
          <Soundcloud
            src={
              'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1368238951&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
            }
            href="https://soundcloud.com/nick-pallett/naked-eye-1"
            title={'Naked Eye 1'}
          />
        </Block2x1>
      </main>
    </div>
  )
}
