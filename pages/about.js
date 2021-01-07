import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
    return(
        <Layout>
            <div>
                <Head>
                    <title>about daily</title>
                </Head>
                <main>
                    <h1>!!ABOUT!!</h1>
                </main>
            </div>
        </Layout>
    );
}