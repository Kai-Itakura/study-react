import Link from 'next/link';
import styles from './Header.module.css'

const NAV_ITEMS = [
    { href: '/', label: 'Index' },
    { href: '/about', label: 'about' },
]

export const Header = () => {
    return (
        <header className={styles.header}>
            {NAV_ITEMS.map((item) => {
                return (
                    <Link key={item.href} href={item.href}>
                        <button className={styles.button}>{item.label}</button>
                    </Link>
                )
            })}
        </header>
    );
}