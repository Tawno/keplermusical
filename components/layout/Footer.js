import style from './Footer.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={style.footer}>
      <p>&copy; Nick Pallett 2023. All Rights Reserved</p>
      <p>
        Design by <Link href="https://www.behance.net/tawnorodman"><u>Tawno Rodman</u></Link>
      </p>
    </footer>
  )
}

export default Footer
