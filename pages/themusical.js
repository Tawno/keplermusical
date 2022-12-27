import Head from 'next/head'
import { Fragment } from 'react'
import Card from '../components/layout/ui/Card'
import classes from './themusical.module.css'
function TheMusical() {
  return (
    <Fragment >
      <Head>
        <title>Sleepwalker: A Kepler Musical</title>
        <meta name="description" content="musical about kepler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.container}>
        <h1>Kepler - Harmony of the Worlds</h1>
        <Card><h3><u>SCENE ONE:</u></h3></Card>
        <Card><h3>My Notes</h3></Card>
        <Card> <p>SONG: &quot;Naked Eye&quot; for six voices A Capella</p>
        <input type="checkbox" id="toggle1" className={classes.button} /><label htmlFor="toggle1"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg> NAKED EYE &quot;Ladies and Gentlemen, behold, the Night Sky&quot;.</label><div className={classes.songvid}><span>Youtube</span></div></Card>
        <Card> Backdrop of the Night Sky/Constellations rotating, Planetarium-like</Card>
        <Card>SONG: &quot;Main Theme / Capricorn&quot; pizzicato strings, flute, harpsichord, guitar, bass, percussion, one male & one female voice</Card>
        <Card>Backdrop: Calendar & Clock showing December 27th AD 1571  2.30pm </Card>
        <Card> <input type="checkbox" id="toggle2" className={classes.button} /><label htmlFor="toggle2"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg> MAIN THEME, followed by narrators (2 voices, male and female) </label><div className={classes.songvid}><span>Play</span></div></Card>
        <Card> </Card>
        <Card><h3><u>SCENE TWO:</u></h3></Card>
        <Card>(full cast)</Card>
        <Card>  A late 16th century street in the town of Weil-der-Stadt, Swabia - a region of what is now Germany</Card>
        <Card></Card>
        <Card><p>SONG: &quot;A Sickly Child&quot; flute(s), harpsichord, bass, percussion, 3 male / 2 female voices</p><input type="checkbox" id="toggle3" className={classes.button} /><label htmlFor="toggle3"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg> CAPRICORN   &quot;Johannes was born / Under the sight of Capricorn&quot;</label><div className={classes.songvid}><span>Play</span></div></Card>
        <Card>3 narrators plus father & mother</Card>
        <Card> </Card>
        <Card></Card>
        <Card><h3><u>SCENE THREE:</u></h3></Card>
        <Card></Card>
        <Card>A study - Kepler at his desk</Card>
        <Card></Card>
        <Card><p>SONG:  &quot;Something I saw&quot; - Johannes recalls two events which, as a child, almost certainly ignited his interest in Astronomy</p><p>  keyboards (harp sound), guitar, bass, percussion, 2 trumpets, lead vocal + 2 backing vocals</p></Card>
        <Card><p>Kepler&apos;s first song, with additional lines from his mother & father. Ideally, the backdrop should be an image of a Comet, which changes into  that of an Eclipse of the Moon, and then back again to the Comet, as the 3 verses of the song play out.</p><p><em>(Otherwise I have this idea of me singing it live with a guitar, if I can find a guy and a girl to play the mum & dad, and making a video!)</em></p></Card>
        <Card>  <input type="checkbox" id="toggle5" className={classes.button} /><label htmlFor="toggle5"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg> SOMETHING I SAW    J K&apos;s first song</label><div className={classes.songvid}><span>Play</span></div></Card>
        <Card></Card>
        <Card></Card>
        </main>
    </Fragment>
  )
}
export default TheMusical