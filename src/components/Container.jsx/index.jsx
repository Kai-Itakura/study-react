import { useCallback, useState } from 'react';
import styles from 'src/styles/Home.module.css'
import { Headline } from 'src/components/Headline';
import { Links } from 'src/components/Links';

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
];

export const Container = () => {
    const [items, setItems] = useState(ITEMS);
    const handleReduce = useCallback(() => {
        setItems((prevItems) => {
            return prevItems.slice(0, prevItems.length - 1);
        });
    }, []);

    const handleIncrease = useCallback(() => {
        setItems((prevItems) => {
            return items.slice(0, prevItems.length + 1);
        });
    }, []);

    return (
        <>
            <Headline page='index' items={items} handleReduce={handleReduce} handleIncrease={handleIncrease}>
                {<code className={styles.code}>{items.length}</code>}
            </Headline>
            <Links items={items}/>
        </>
    )
}
