import { Inter } from '@next/font/google'
import styles from './Links.module.css'

const inter = Inter({ subsets: ['latin'] });

export function Links({ items, handleReduce, handleIncrease }) {
    return (
        <>
            <button onClick={handleReduce}>減らす</button>
            <button onClick={handleIncrease}>増やす</button>
            <div className={styles.grid}>
                {items.map((item, index) => {
                    return (
                        <a key={index} href={item.href} className={styles.card} target="_blank" rel="noopener noreferrer">
                            <h2 className={inter.className} dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                            <p className={styles.description}>{item.description}</p>
                        </a>
                    )
                })}
            </div>
        </>
    )
}
