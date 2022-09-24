import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/header'
import { About, Experience, Hero } from '../components/sections'

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto z-0">
      <Head>
        <title>Miten Chauhan | Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* skills */}

      {/* projects */}

      {/* contact me */}
    </div>
  )
}

export default Home
