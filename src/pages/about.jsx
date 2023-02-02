import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Links } from 'src/components/Links'
import { Center } from 'src/components/Center'
import { Headline } from 'src/components/Headline'
import { Header } from 'src/components/Header'
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from '../hooks/useInputArray'
import { useBgPink } from '../hooks/useBgPink'

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgPink();

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <div className={styles.container}>
        {isShow ? <h2>{count}</h2> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>
          {isShow ? '非表示' : '表示'}
        </button>
      </div>

      <div className={styles.container}>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ol>
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ol>
      </div>

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
