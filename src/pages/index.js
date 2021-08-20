import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recipe | mayyur.com</title>
        <link rel="icon" href="/recipe.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="px-8 mx-auto max-w-7xl sm:px-16">Main</main>
    </div>
  )
}
