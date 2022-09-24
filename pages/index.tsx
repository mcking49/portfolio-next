import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/header'
import {
  About,
  Contact,
  Experience,
  Hero,
  Skills,
} from '../components/sections'
import { Projects } from '../components/sections/projects'

const Home: NextPage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
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

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  )
}

export default Home
