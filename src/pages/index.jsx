import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Links } from 'src/components/Links'
import { Center } from 'src/components/Center'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = 'pink';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <h1>{count}</h1>
        <button onClick={handleClick}>ボタン</button>
      </div>

      <main className={styles.main}>
        <Headline page='index'>
          {<code className={styles.code}>pages/index.js</code>}
        </Headline>
        <Center page='index' />
        <Links />
      </main>
    </>
  )
}
