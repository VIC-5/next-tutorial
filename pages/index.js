import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyle from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout Home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyle.headingMd}>
                <p>Hi! I'm VIC-S. This is a my private studying.</p>
                <p>
                    (This is a sample website - you'll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
        </Layout>
    )
}