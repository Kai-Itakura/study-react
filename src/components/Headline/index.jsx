import styles from './Headline.module.css'
import { Vercel } from 'src/components/Vercel';

export function Headline({ items, handleReduce, handleIncrease }) {
    return (
        <>
            <div className={styles.description}>
                <p>
                    アイテムの数は&nbsp;{items.length}個&nbsp;です
                </p>
                <Vercel />
            </div >
            <button onClick={handleReduce}>減らす</button>
            <button onClick={handleIncrease}>増やす</button>
        </>
    );
}
