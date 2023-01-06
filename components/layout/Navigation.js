import Link from 'next/link'

import styles from './Navigation.module.css'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/themusical', label: 'The Musical' },
  { href: '/songs', label: 'Songs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function Navigation() {
  const [isActive, setActive] = useState('false')
  const ToggleClass = () => {
    setActive(!isActive)
  }
  return (
    <header className={styles.header}>
      <div className={styles.menuButton} onClick={ToggleClass}>
        <Image className={isActive ? styles['inactive'] : styles['active']}
          src="/mobile-button-01.svg"
          width="40"
          height="40"
          alt="mobile button"
        ></Image>
      </div>
      <ul className={isActive ? styles['inactive'] : styles['active']}>
        {links.map((link) => (
          <li   key={link.href} >
            <Link onClick={ToggleClass} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Navigation
