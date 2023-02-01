import { Inter } from '@next/font/google'
import styles from './Links.module.css'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
    {
        href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Docs <span>-&gt;</span>',
        description: 'Find in-depth information about Next.js features and&nbsp;API.'
    },
    {
        href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Learn <span>-&gt;</span>',
        description: 'Learn about Next.js in an interactive course with&nbsp;quizzes!'
    },
    {
        href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Templates <span>-&gt;</span>',
        description: 'Discover and deploy boilerplate example Next.js&nbsp;projects.'
    },
    {
        href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        title: 'Deploy <span>-&gt;</span>',
        description: 'Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.'
    }
]

export function Links() {
    return (
        <div className={styles.grid}>
            {ITEMS.map(item => {
                return (
                    <a key={item.href} href={item.href} className={styles.card} target="_blank" rel="noopener noreferrer">
                        <h2 className={inter.className} dangerouslySetInnerHTML={{__html: item.title}}></h2>
                        <p className={styles.description}>{item.description}</p>
                    </a>
                )
            })}
        </div>
    )
}