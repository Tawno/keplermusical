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
          <li>
          <Link href='/songs'>Songs </Link>
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
