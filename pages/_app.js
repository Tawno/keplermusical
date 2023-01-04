import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import localFont from '@next/font/local'
import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({
  weight: ['variable'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--playfair-font',
})

const segoe = localFont({
  src: [{ path: './fonts/segoeui.woff2' }],
  //   { path: './fonts/segoeuib.ttf', weight: 400  },
  //   { path: './fonts/segoeuisl.ttf', weight: 300 },
  //   { path: './fonts/segoeuiz.ttf', weight: 400, style: 'italic' }],
})
function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        p {
          font-family: ${segoe.style.fontFamily};
        }
        h1, .readMore {
          font-family: ${playfair.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
