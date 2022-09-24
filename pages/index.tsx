import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/header'
import { Hero } from '../components/sections'

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto z-0">
      <Head>
        <title>Miten Chauhan | Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
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
