import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Links } from 'src/components/Links'
import { Center } from 'src/components/Center'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert('5文字以内にしてください！');
      return;
    }
    setText(e.target.value.trim());
  }, []);

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
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>
          {isShow ? '非表示' : '表示'}
        </button>
        <input type="text" value={text} onChange={handleChange} />
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
