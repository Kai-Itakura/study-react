import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Center } from 'src/components/Center'
import { Header } from 'src/components/Header'
import { Container } from '../components/Container.jsx'

const About = (props) => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Header />

      <div className={styles.container}>
        {props.isShow ? <h2>{props.doubleCount}</h2> : null}
        <button onClick={props.handleClick}>ボタン</button>
        <button onClick={props.handleDisplay}>
          {props.isShow ? '非表示' : '表示'}
        </button>
      </div>

      <div className={styles.container}>
        <input type="text" value={props.text} onChange={props.handleChange} />
        <button onClick={props.handleAdd}>追加</button>
        <ol>
          {props.array.map(item => {
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

export default About;