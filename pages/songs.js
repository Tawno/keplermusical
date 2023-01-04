import Head from 'next/head'
import Card from '../components/layout/ui/Card'
import { Fragment } from 'react'
import Banner from '../components/layout/ui/Banner'
import Image from 'next/image'
import Soundcloud from '../components/layout/embed/soundcloud'
import Block2x1 from '../components/layout/ui/Block2x1' 

function Songs() {
  return (
    <Fragment>
      <Head>
        <title>Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner><Image src="/../public/star-map_17.jpg" alt="drawing of an old telescope" width="800" height="343"/></Banner>
     <h2>Songs Featured in <i>Kepler - Harmony of the Worlds</i></h2>
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
         </Fragment>
  )
}
export default Songs
