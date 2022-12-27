import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/layout/ui/Card'
import Script from 'next/script'
import Image from 'next/image'

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
        <h1>Kepler - Harmony of the Worslds</h1><h3></h3>
        <div className={styles.bannerImg}><Image src="/../public/telescope-frontimg.jpg" alt="drawing of an old telescope" width="525" height="250"/></div>
        <main className={styles.main}>
        <Card>  <p>
        Kepler - Harmony of the Worlds is a musical celebration inspired by the life and work of
          Johannes Kepler - astronomer, mathematician, astrologer and visionary.
        </p>
        <p>
          Set in late 16th/early 17th century Europe, an era of superstition,
          ignorance, plague and religious tyranny, the brilliant young Kepler,
          part-dreamer, part-explorer, emerges from a miserable and sickly
          childhood in obsessive pursuit of an idea which would eventually
          change mankind’s concept of the heavens and lay the foundations of
          Modern Astronomy.
        </p>
        <p>
          A daring and unusual interpretation in music and song, it tells of one
          man’s lifelong search for Truth and Order in the Cosmos, a quest to
          fathom the basic mechanism of the Universe and the Harmonies of
          Nature; as if Johannes wished to see into the very Mind of the
          Creator!
        </p></Card>
        <Card>
      
        <p>
          It is the story of triumph-over-adversity, of a life and career
          hampered by personal and financial hardships against a backdrop of
          fierce political and religious controversy, beginning with early
          family life – a young boy fascinated by numbers and astrology –
          continuing through to a riotous collaboration with the great Danish
          astronomer Tycho Brahe, followed by a frustrating correspondence with
          Galileo, pioneer of the telescope, to a twice-married, renowned and
          aging Kepler, still emerged in relentless cosmic exploration, having
          to defend his own mother in a witch trial!
        </p>
        <p>
          The extraordinary life of this reckless genius and his immortal
          achievements, attained as much via the comic-tragic twists and turns
          of fate as through his own singular determination, are here, musically
          and dramatically portrayed.
        </p></Card>
      </main>
    </div>
  )
}
