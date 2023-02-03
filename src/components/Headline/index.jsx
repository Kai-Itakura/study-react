import styles from './Headline.module.css'
import { Vercel } from 'src/components/Vercel';

export function Headline({ items }) {
    return (
        <div className={styles.description}>
            <p>
                アイテムの数は&nbsp;{items.length}個&nbsp;です
            </p>
            <Vercel />
        </div >
    );
}
