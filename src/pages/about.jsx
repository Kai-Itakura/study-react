import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Links } from 'src/components/Links'
import { Center } from 'src/components/Center'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />
      
      <main className={styles.main}>
        <Headline page='about'>
          {<code className={styles.code}>pages/about.js</code>}
        </Headline>
        <Center page='about' />
        <Links />
      </main>
    </>
  )
}
