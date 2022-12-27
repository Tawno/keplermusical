import Link from 'next/link'

import classes from './Navigation.module.css';

function Navigation() {

  return (
    <header className={classes.header}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/themusical'>The Musical</Link>
          </li>
          <li className={classes.songButton}>
            <a>Songs</a><ul className={classes.songlist}>
      <li>
        <Link href='/songs/songTemp'>NAKED EYE </Link>
      </li>
      <li>
        <Link href='/songs/songTemp'>MAIN THEME</Link>
      </li>
      <li>
        <Link href='/songs/songTemp'>CAPRICORN </Link>
      </li>
      <li>
        <Link href='/songs/songTemp'>A SICKLY CHILD</Link>
      </li>
          </ul>
          </li>
          
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
    </header>
  );
}

export default Navigation;
