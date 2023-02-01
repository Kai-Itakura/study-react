import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Links } from 'src/components/Links'
import { Center } from 'src/components/Center'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'
import { useCallback, useEffect } from 'react'

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.href);
    alert(foo);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = 'pink';
    console.log('マウント時');

    return () => {
      document.body.style.backgroundColor = '';
      console.log('アンマウント時');
    };
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <a href='./about' onClick={handleClick}>ボタン</a>

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
