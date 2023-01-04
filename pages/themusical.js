import Head from 'next/head'
import { Fragment } from 'react'
import styles from './themusical.module.css'
import Image from 'next/image'
import Banner from '../components/layout/ui/Banner'
import Card from '../components/layout/ui/Card'

function TheMusical() {
  return (
    <Fragment >
      <Head>
        <title>A Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Banner><Image src="/../public/natalie-parham-yHlD13IaUEo.jpg" alt="drawing of an old telescope" width="800" height="343" style={{objectPosition: '50% 20%'}}/></Banner>
      <main className={styles.container}> <h2>
        The Musical</h2> 
      <Card><p>
      Set in late 16th/early 17th century Europe, an era of superstition, ignorance, plague and religious tyranny, the brilliant young Kepler, part-dreamer, part-explorer, emerges from a miserable and sickly childhood in obsessive pursuit of an idea which would eventually change mankind’s concept of the heavens and lay the foundations of Modern Astronomy.
</p><p>
A daring and unusual interpretation in music and song, it tells of one man’s lifelong search for Truth and Order in the Cosmos, a quest to fathom the basic mechanism of the Universe and the Harmonies of Nature, as if Johannes wished to see into the very Mind of the Creator!
  </p><p>
It is the story of triumph-over-adversity, a life and career hampered by personal and financial hardships against a backdrop of wars and religious controversy, beginning with early family life – a fascination with numbers and astrology; coming-of-age; spiritual conflict; two marriages; a riotous and yet pivotal collaboration with the great Danish astronomer Tycho Brahe (although surprisingly, largely ignored by Galileo, pioneer of the telescope) - to the renowned and aging Imperial Mathematician, still immersed in relentless cosmic exploration, having to defend his own mother in a witch trial!
 </p><p>
The extraordinary life of this reckless genius and his immortal achievements, attained as much via the comic-tragic twists and turns of fate as through his own singular determination, are here, musically and dramatically portrayed.
            </p>                                                                                                           
      </Card>
        </main>
    </Fragment>
  )
}
export default TheMusical