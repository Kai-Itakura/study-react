import Link from 'next/link';
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <button className={styles.button}>Index</button>
            </Link>
            <Link href="/about">
                <button className={styles.button}>About</button>
            </Link>
        </header>
    );
}