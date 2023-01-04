import Head from 'next/head'
import Card from '../components/layout/ui/Card'
import { Fragment } from 'react'
import Banner from '../components/layout/ui/Banner'
import Image from 'next/image'
function About() {
  return (
    <Fragment>
      <Head>
        <title>Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner><Image src="/../public/telescope-frontimg.jpg" alt="drawing of an old telescope" width="640" height="343" style={{objectPosition: '48% 123%' }}/></Banner>
      <Card>
        <h2>About the Composer/Lyricist:</h2>
        <p>
          Nick Pallett spent many years as a professional musician-singer,
          songwriter & band-member, touring & recording all over the UK, in
          Europe, the USA, Australia & the South Pacific islands, covering a
          range of styles to include prog rock, folk, soul, reggae, jazz &
          musical theatre. He then trained as a lecturer/music teacher
          specialising in guitar, bass & keyboards and worked for the Bristol &
          Bath education authorities.
        </p>
        <p>
          The idea for a Concept Album, ‘Opera’, or Stage Musical, arose several
          years ago, initiated by lifelong passion for Astronomy & The History
          of Science. But, with so many work-life commitments, it was very much
          put on the ‘back-burner’. Then when the pandemic struck, Nick found he
          had a lot more time at home, and so decided to just get on with it!
        </p>
        <p>
          To quote Nick…. ” It’s been quite liberating without the constraints
          of having to try and write three-minute/four-chord commercial songs
          about relationships or ‘how I’m feeling’! Far more of a challenge, for
          me at least, has been to portray concepts such as Geometry, and a 17th
          Century Witch Trial, as song lyrics, while still recognising the need
          for a catchy melody and a good ‘hook’! I hope I’ve succeeded.”
        </p>
        </Card>
        <Card>
        
          <b>Acknowledgments and thanks:</b>
          <p>
          The primary inspiration for this work has been Arthur Koestler’s “The
          Watershed”. A masterful story of the tortured life and towering
          accomplishments of Johannes Kepler (1571-1630), taken from “The
          Sleepwalkers” by the same author (Hutchinson 1959)</p><p> In addition, Mr
          Pallett has borrowed shamelessly from the following: </p><p>“Kepler” by Max
          Caspar – official biography (Abelard-Schuman 1948)</p><p> “Kepler” by John
          Banville – a novel (Granada 1981)</p><p> “Johannes Kepler and the New
          Astronomy” by James R Voelkel (Oxford University Press 1999)</p><p> “Hamlet”
          by William Shakespeare 1609 “Zen Telegrams” by Paul Reps 1959</p><p> “The
          Simpsons” written by Matt Groening / Sky Television
        </p>
      </Card>
    </Fragment>
  )
}
export default About
