import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Center } from 'src/components/Center'
import { Header } from 'src/components/Header'
import { Container } from '../components/Container.jsx'

export default function About({
  doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd
}) {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <div className={styles.container}>
        {isShow ? <h2>{doubleCount}</h2> : null}
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
        <Center page='about' />
        <Container />
      </main>
    </>
  )
}
