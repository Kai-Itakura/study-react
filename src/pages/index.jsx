import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Center } from '../components/Center';
import { Container } from '../components/Container.jsx';

export default function Home(props) {
  const {
    count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd
  } = props;

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
      </div>

      <div className={styles.container}>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map(item => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
      </div>

      <main className={styles.main}>
        <Center page='index' />
        <Container />
      </main>
    </>
  )
}
