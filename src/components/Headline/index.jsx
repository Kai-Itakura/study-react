import styles from './Headline.module.css'
import { Vercel } from 'src/components/Vercel';

export function Headline(props) {
    return (
        <div className={styles.description}>
            <p>
                {props.page} page&nbsp;{props.children}
            </p>
            <Vercel />
        </div >
    );
}