import styles from './Headline.module.css'
import { Vercel } from 'src/components/Vercel';

export const Headline = (props) => {
    return (
        <>
            <div className={styles.description}>
                <p>
                    アイテムの数は&nbsp;{props.items.length}個&nbsp;です
                </p>
                <Vercel />
            </div >
            <button onClick={props.handleReduce}>減らす</button>
            <button onClick={props.handleIncrease}>増やす</button>
        </>
    );
}
