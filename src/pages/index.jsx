import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Center } from '../components/Center';
import { Container } from '../components/Container.jsx';

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

      <div className={styles.container}>
        {props.isShow ? <h1>{props.count}</h1> : null}
        <button onClick={props.handleClick}>ボタン</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? '非表示' : '表示'}
        </button>
      </div>

      <div className={styles.container}>
        <input type="text" value={props.text} onChange={props.handleChange} />
        <button onClick={props.handleAdd}>追加</button>
        <ul>
          {props.array.map(item => {
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

export default Home;