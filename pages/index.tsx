import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/header'
import { Hero } from '../components/sections'

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Miten Chauhan | Portfolio</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      {/* about */}

      {/* experience */}

      {/* skills */}

      {/* projects */}

      {/* contact me */}
    </div>
  )
}

export default Home
